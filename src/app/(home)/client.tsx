"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Frank" });

  return <div>Page client says: {data.greeting}</div>;
};
