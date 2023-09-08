const apiToken =
  "e788b67bdb523ea2defeb14191a92ddd9f9246c045db45fb93d5aa1f6add6b3f3856555f55bf2f29e4943738a9d6f3e158c58597d07bd45a6a433fcff5f6e4ab9327fc8924e5062c3e37d7b16c9d52563210ab976b0cbc0d3e4d04cd6bb2a547e27d3b66969d74fc122718d0d334df53ca6c94cc9d5a7265bd7ac40e1ca7861c";

export async function getMe(url) {
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
