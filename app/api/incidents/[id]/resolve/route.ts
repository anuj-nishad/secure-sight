import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: unknown,
) {
  const { id } = (context as { params: { id: string } }).params;

  const existing = await db.incident.findUnique({ where: { id } });

  if (!existing) {
    return NextResponse.json({ error: "Incident not found" }, { status: 404 });
  }

  const updated = await db.incident.update({
    where: { id },
    data: { resolved: !existing.resolved },
  });

  return NextResponse.json(updated);
}
