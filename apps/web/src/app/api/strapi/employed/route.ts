export async function GET() {
  const res = await fetch(
    "http://localhost:1337/api/home-page?locale=fi&populate[partners][populate][partners][populate]=*",
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
