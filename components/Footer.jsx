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
    <div className={styles.footerWrapper}>
      <FaAngleLeft />
      <div className={styles.active}>
        <CustomLink
          href={"/"}
          icon={<FaHouse />}
          text={"Home"}
          className={pathname.length === 1 ? styles.active : ""}
        />
      </div>
      <CustomLink
        href={"/vehicle-list"}
        icon={<FaCar />}
        text={"Vehicles"}
        className={pathname.includes("vehicle") ? styles.active : ""}
      />
      <CustomLink
        href={"/emp-list"}
        icon={<FaUserTie />}
        text={"Operators"}
        className={pathname.includes("emp") ? styles.active : ""}
      />

      <FaAngleRight />
    </div>
  );
};

export default Footer;
