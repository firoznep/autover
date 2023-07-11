import { vehicles } from "@/libs/data";
import { Suspense } from "react";
import ListDisplay from "@/components/ListDisplay";

export default async function Vehicles() {
  const res = await vehicles();
  res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <ListDisplay
          code={"make"}
          filterBy={"plateNum"}
          linkPath={"vehicles"}
          obj={res}
        />
      </Suspense>
    </>
  );
}
