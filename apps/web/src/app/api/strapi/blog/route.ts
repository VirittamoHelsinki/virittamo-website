export async function GET() {
  const res = await fetch(
    `http://localhost:1337/api/blog-page?locale=fi&populate=*`,
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
