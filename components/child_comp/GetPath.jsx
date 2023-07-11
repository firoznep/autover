"use client";

import { usePathname } from "next/navigation";
import ListItem from "./ListItem";

export default function GetPath() {
  const pathname = usePathname();

  return pathname === "/vehicles" ? (
    <ListItem
      itemOne={"Add vehicle"}
      // itemTwo={"Vehicle Detail"}
      linkPathOne={"/vehicles/add-vehicle"}
    />
  ) : pathname === "/operators" ? (
    <ListItem
      itemOne={"Add Operator"}
      // itemTwo={"Operator Detail"}
      linkPathOne={"/operators/add-emp"}
    />
  ) : null;
}
