"use client";
import Error from "@/components/common/Error";

export default function GlobalError({ error }: { error: Error }) {
  return <Error message={error.message} />;
}
