import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {

    const data = await query('SELECT * FROM biodata LIMIT 1');
    
    const biodata = Array.isArray(data) ? data[0] : null;

    return NextResponse.json(biodata);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

