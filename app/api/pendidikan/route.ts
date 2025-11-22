import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {

    const data = await query('SELECT * FROM pendidikan ORDER BY tahun_selesai DESC');
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}