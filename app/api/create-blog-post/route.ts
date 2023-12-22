import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const post = {
    id:0,
    title:"Blog Post 0",
    description:"this the description of the blog post",
    h1:"My first blog post",
    categories:["Blockhain"],
    thumbnailUrl:"loyaltEth-thumbnail.jpg",
    headerImg:"loyaltEth-thumbnail.jpg",
    thumbnailAlt:"On vous explique la Blmockchain",
    intro: "Introduction ENGLISH",
    h21:"titre 2 1",
    p1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    h22:"titre 2 2",
    p2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    h23:"titre 2 3",
    p3:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    conslusion:"The conclusion"
  }
export async function GET(request: Request) {

 
  try {
    
    await sql`INSERT INTO categorie (name) VALUES ();`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const {rows} = await sql`SELECT * FROM categorie;`;
  return NextResponse.json({ rows }, { status: 200 });
}