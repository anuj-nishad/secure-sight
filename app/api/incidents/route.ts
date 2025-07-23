import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const resolvedParam = searchParams.get("resolved");

  const resolved =
    resolvedParam === "true" ? true : resolvedParam === "false" ? false : undefined;

  const incidents = await db.incident.findMany({
    where: resolved !== undefined ? { resolved } : {},
  });

  return NextResponse.json(incidents);
}
