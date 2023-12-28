export async function GET() {
  const res = await fetch(
    "http://localhost:1337/api/articles?locale=fi&filters[feature][$eq]=true&populate=*",
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
