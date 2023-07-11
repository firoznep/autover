"use client";

import {
  FaAngleLeft,
  FaAngleRight,
  FaCar,
  FaHouse,
  FaUserTie,
} from "react-icons/fa6";
import styles from "./footer.module.css";
import CustomLink from "./child_comp/CustomLink";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <FaAngleLeft />

      <CustomLink
        href={"/"}
        icon={<FaHouse />}
        text={"Home"}
        className={pathname.length <= 1 ? styles.active : ""}
      />

      <CustomLink
        href={"/vehicles"}
        icon={<FaCar />}
        text={"Vehicles"}
        className={pathname.includes("vehicle") ? styles.active : ""}
      />
      <CustomLink
        href={"/operators"}
        icon={<FaUserTie />}
        text={"Operators"}
        className={pathname.includes("operator") ? styles.active : ""}
      />

      <FaAngleRight />
    </>
  );
};

export default Footer;
