export async function getMe(url: string) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("no data");
  }
}
