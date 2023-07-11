"use client";

import styles from "./delBtn.module.css";
import { delVeh } from "@/libs/delVeh";
import { FaDeleteLeft } from "react-icons/fa6";

export default function DelVeh({ id }) {
  const handleDel = () => {
    const cf = confirm("Aru you sure want to Delete!");
    cf
      ? delVeh(id).then(() => alert("Emp Deleted."))
      : alert("Process aborted.");
  };

  return <FaDeleteLeft className={styles.leftDel} onClick={handleDel} />;
}
