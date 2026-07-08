import { NextRequest, NextResponse } from "next/server";
import { checkAuth, commitToGitHub } from "../auth";
import routesData from "@/data/routes.json";
import departuresData from "@/data/departures.json";
import vendorsData from "@/data/vendors.json";

export async function GET(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  return NextResponse.json({
    routes: routesData,
    departures: departuresData,
    vendors: vendorsData,
  });
}

export async function PUT(req: NextRequest) {
  const authError = checkAuth(req);
  if (authError) return authError;

  const body = await req.json();
  const { entity, data } = body as { entity: string; data: unknown };

  if (!entity || !data) {
    return NextResponse.json({ error: "entity e data richiesti" }, { status: 400 });
  }

  const fileMap: Record<string, string> = {
    routes: "src/data/routes.json",
    departures: "src/data/departures.json",
    vendors: "src/data/vendors.json",
  };

  const filePath = fileMap[entity];
  if (!filePath) {
    return NextResponse.json({ error: "entity non valida" }, { status: 400 });
  }

  const content = JSON.stringify(data, null, 2) + "\n";
  const message = `data: aggiorna ${entity} via pannello admin`;

  const result = await commitToGitHub(filePath, content, message);

  if (!result.ok) {
    return NextResponse.json(
      { saved: false, error: result.error, json: content },
      { status: 200 }
    );
  }

  return NextResponse.json({ saved: true, message: `${entity} aggiornato e commit pushato. Vercel ribuildera' automaticamente.` });
}
