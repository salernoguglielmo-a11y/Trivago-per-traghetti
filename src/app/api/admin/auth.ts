import { NextRequest, NextResponse } from "next/server";

export function checkAuth(req: NextRequest): NextResponse | null {
  const token = process.env.ADMIN_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "ADMIN_TOKEN non configurato" }, { status: 500 });
  }
  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${token}`) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
  }
  return null;
}

const REPO = process.env.GITHUB_REPO || "salernoguglielmo-a11y/trivago-per-traghetti";
const BRANCH = process.env.GITHUB_BRANCH || "claude/molo-ferry-comparison-k56fhh";

export async function commitToGitHub(
  filePath: string,
  content: string,
  message: string
): Promise<{ ok: boolean; error?: string }> {
  const ghToken = process.env.GITHUB_TOKEN;
  if (!ghToken) {
    return { ok: false, error: "GITHUB_TOKEN non configurato. Dati salvati solo localmente." };
  }

  const apiUrl = `https://api.github.com/repos/${REPO}/contents/${filePath}`;

  const getRes = await fetch(apiUrl + `?ref=${BRANCH}`, {
    headers: { Authorization: `Bearer ${ghToken}`, Accept: "application/vnd.github.v3+json" },
  });

  let sha: string | undefined;
  if (getRes.ok) {
    const existing = await getRes.json();
    sha = existing.sha;
  }

  const putRes = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${ghToken}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString("base64"),
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!putRes.ok) {
    const err = await putRes.text();
    return { ok: false, error: `GitHub API error: ${putRes.status} ${err}` };
  }

  return { ok: true };
}
