import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

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
