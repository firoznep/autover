"use client";

import { useState } from "react";
import CustomBtn from "./child_comp/CustomBtn";
import styles from "./success.module.css";

const Success = ({ message }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={`${styles.container} ${show && styles.active}`}>
      <div className={styles.mes}>
        <p>{message}</p>
        <div className={styles.ok}>
          <CustomBtn text={"OK"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
export default Success;
