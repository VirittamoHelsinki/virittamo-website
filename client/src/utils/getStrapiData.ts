const apiToken =
"39d4d3a0e66bab0918b0e63a9ecc542de2cd158a389d88e65870c48e1ab3deee08489e31c4a76bfb8042148a861dfbebb37d0b58d576832513ae12f2f417c42888f7782e5b327f01414a27f7c32fbf31aedb24b5d0904e049ae5f2f8460130f2865fc41a2982945a394fab6f8c9972a768b1a221bf6ec4176551caf49e1cb1ea"

export async function getMe(url: string) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("no data");
  }
}
