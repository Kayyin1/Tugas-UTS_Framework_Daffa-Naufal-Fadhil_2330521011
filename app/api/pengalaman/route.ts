// app/api/pengalaman/route.ts
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {

    const data = await query('SELECT * FROM pengalaman ORDER BY tahun_mulai DESC');
    
    const safeData = Array.isArray(data) ? data : [];

    return NextResponse.json(safeData);
  } catch (error: any) {

    console.error("DATABASE ERROR:", error.message);
    
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}