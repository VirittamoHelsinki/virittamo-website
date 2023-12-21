"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUrl } from "~/utils/shared";

async function fetcher<T>(path: string): Promise<T> {
  const res = await fetch(path, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json() as T;
}

function useWaitQuery(props: { wait: number }) {
  const query = useSuspenseQuery({
    queryKey: ["wait", props.wait],
    queryFn: async () => {
      const path = `/api/strapi?wait=${props.wait}`;
      const url = getUrl() + path;

      const res = await fetcher<string>(url);
      return res;
    },
  });

  return [query.data, query] as const;
}

export function Test() {
  const [data] = useWaitQuery({ wait: 100 });

  return `Arto got an idea ${data}`;
}
