// "use client";
import Link from "next/link";

import styles from "./customLink.module.css";

const CustomLink = ({ href, icon, text, onClick, className }) => {
  return (
    <Link
      href={href}
      className={`${styles.footerLink} ${className}`}
      onClick={onClick}
    >
      {icon}
      <span className={`${styles.footerLinkItem} ${className}`}>{text}</span>
    </Link>
  );
};
export default CustomLink;
