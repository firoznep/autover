"use client";

import { delEmp } from "@/libs/delEmp";
import styles from "./delBtn.module.css";
import { FaDeleteLeft } from "react-icons/fa6";

export default function DelBtn({ id }) {
  const handleDel = () => {
    const cf = confirm("Aru you sure want to Delete!");
    cf
      ? delEmp(id).then(() => alert("Emp Deleted."))
      : alert("Process aborted.");
  };

  return <FaDeleteLeft className={styles.leftDel} onClick={handleDel} />;
}
