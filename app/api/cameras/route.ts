import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const cameras = await db.camera.findMany();
  return NextResponse.json(cameras);
}
