import { drivers } from "@/libs/data";
import { Suspense } from "react";
import ListDisplay from "@/components/ListDisplay";

export default async function Drivers() {
  const res = await drivers();
  res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <Suspense fallback={<h4>Loading...</h4>}>
        <ListDisplay
          code={"drCode"}
          filterBy={"name"}
          linkPath={"operators"}
          obj={res}
        />
      </Suspense>
    </>
  );
}
