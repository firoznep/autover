"use client";

import React from "react";

import { useState } from "react";
import CustomLink from "./CustomLink";
import styles from "./navSubMenu.module.css";

const NavSubMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenu = (v) => {
    setShowSubMenu((pre) => !pre);
    console.log("handleSubmenu: ", showSubMenu);
  };

  return (
    <li
      className={`${styles.navitem} ${styles.dropdown}`}
      onClick={handleSubMenu}
    >
      <CustomLink href={"/"} text={"Products"} className={styles.navlink} />
      <nav
        className={`${styles.submenu} ${showSubMenu ? styles.showsubmenu : ""}`}
      >
        <ul className={styles.submenuitems}>
          <li className={styles.submenuitem}>
            <CustomLink
              href={"/"}
              text={"Product 1"}
              className={styles.submenulink}
            />
          </li>
          <li className={styles.submenuitem}>
            <CustomLink
              href={"/"}
              text={"Product 2"}
              className={styles.submenulink}
            />
          </li>
          <li className={styles.submenuitem}>
            <CustomLink
              href={"/"}
              text={"Product 3"}
              className={styles.submenulink}
            />
          </li>
        </ul>
      </nav>
    </li>
  );
};
export default NavSubMenu;
