export async function fetcher<T>(url: string): Promise<T | Error> {
    const res = await fetch(url)

    const data = res.json() as T

    if (!res.ok) {
        return new Error("not ok, bro trust me")
    }

    return data
}
