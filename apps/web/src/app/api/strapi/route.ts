import { NextResponse } from "next/server";

// export async function GETR(request: NextRequest) {
//   const { searchParams } = new URL(request.url);
//   const wait = Number(searchParams.get("wait"));

//   await new Promise((resolve) => setTimeout(resolve, wait));

//   return NextResponse.json(`${wait}ms`);
// }

export async function GET() {
  const res = await fetch(
    "http://localhost:1337/api/home-page?locale=fi&populate=*",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    },
  );

  const data = (await res.json()) as string;

  return Response.json(data);
}
