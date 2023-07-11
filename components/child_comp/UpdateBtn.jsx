"use client";

import { delEmp } from "@/libs/delEmp";
import { updateEmp } from "@/libs/updateEmp";

export default function UpdateBtn(items) {
  const handleDel = () => {
    console.log(items);
    // const cf = confirm("Aru you sure want to Delete!");
    // cf
    //   ? delEmp(id).then(() => alert("Emp Deleted."))
    //   : alert("Process aborted.");
  };

  return <button onClick={handleDel}>UpdateBtn</button>;
}
