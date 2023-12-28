export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    const res = await fetch(
        `http://localhost:1337/api/articles/${slug}?locale=fi&populate=*`,
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
