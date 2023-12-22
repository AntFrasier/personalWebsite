import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const catName = searchParams.get('catName');
 
  try {
    if (!catName) throw new Error('categorie name required');
    await sql`INSERT INTO categorie (name) VALUES (${catName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const {rows} = await sql`SELECT * FROM categorie;`;
  return NextResponse.json({ rows }, { status: 200 });
}