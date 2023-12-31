"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./listDisplay.module.css";
import UpdateForm from "./UpdateForm";
import DelVeh from "./child_comp/DelVeh";
import DelBtn from "./child_comp/DelBtn";
import { FaCircleInfo, FaMagnifyingGlass } from "react-icons/fa6";

import UpdateVeh from "./UpdateVeh";

export default function ListDisplay({ obj = {}, filterBy, code, linkPath }) {
  const [val, setVal] = useState("");

  const myobj = obj.filter((r) => {
    const res = r[filterBy];
    if (!res) {
      return r;
    }

    if (filterBy == "plateNum") {
      return res.includes(val);
    }
    return res.toLowerCase().includes(val.toLowerCase());
  });

  return (
    <div className={styles.container}>
      <FaMagnifyingGlass />
      <input
        className={styles.search}
        type="search"
        name="search"
        onChange={(e) => setVal(e.target.value)}
        placeholder={`Search By ${filterBy}`}
      />

      <div className={styles.subContainer}>
        <div className={styles.itemsWrapper}>
          <span>S.N.</span>
          <span>{code}</span>
          <span>{filterBy}</span>
          <span>Details</span>
          <span>Edit</span>
          <span>Delete</span>
        </div>

        {myobj.map((itm, i) => {
          return (
            <div key={itm.id} className={styles.itemsWrapper}>
              <span>{i + 1}</span>
              <span>{itm[code]}</span>
              <span>{itm[filterBy]}</span>
              {
                <div>
                  <Link href={`/${linkPath}/${itm.id}`}>
                    <FaCircleInfo className={styles.info} />
                  </Link>
                </div>
              }

              {linkPath === "operators" ? (
                <>
                  <UpdateForm items={itm.id} />
                  <DelBtn id={itm.id} />
                </>
              ) : (
                <>
                  <UpdateVeh itm={itm} />

                  <DelVeh id={itm.id} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
