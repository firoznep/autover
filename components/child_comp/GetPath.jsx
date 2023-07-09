"use client";

import { usePathname } from "next/navigation";
import ListItem from "./ListItem";

export default function GetPath() {
  const pathname = usePathname();

  return pathname === "/vehicle-list" ? (
    <ListItem
      itemOne={"Add vehicle"}
      itemTwo={"Vehicle Detail"}
      linkPathOne={"add-vehicle"}
    />
  ) : pathname === "/emp-list" ? (
    <ListItem
      itemOne={"Add Operator"}
      itemTwo={"Operator Detail"}
      linkPathOne={"/add-emp"}
    />
  ) : null;
}
