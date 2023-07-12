import { drivers } from "@/libs/data";
import ListDisplay from "@/components/ListDisplay";

export default async function Drivers() {
  const res = await drivers();
  res.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <ListDisplay
        code={"drCode"}
        filterBy={"name"}
        linkPath={"operators"}
        obj={res}
      />
    </>
  );
}
