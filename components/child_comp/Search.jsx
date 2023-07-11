"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Search({ params }) {
  const searchParams = useSearchParams();

  const person = searchParams.get("name");

  return (
    <div>
      <h1>Search</h1>
      <Link
        href={{
          pathname: "/drivers/",
          query: { name: "Khan" },
        }}
      >
        driver
      </Link>
      <div>
        <p>
          <span>Name: {person}</span>
        </p>
      </div>
    </div>
  );
}
