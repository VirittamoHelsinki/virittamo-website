import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const wait = Number(searchParams.get("wait"));

  await new Promise((resolve) => setTimeout(resolve, wait));

  return NextResponse.json(`waited ${wait}ms`);
}
