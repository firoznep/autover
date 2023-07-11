"use client";

import { useState } from "react";

export default function ShowHide({ text, children }) {
  const [sh, setSh] = useState(false);
  return (
    <div>
      <button onClick={() => setSh((pre) => !pre)}>{text}</button>
      {sh && children}
    </div>
  );
}
