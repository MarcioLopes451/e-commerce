import React from "react";

export default function BackDrop({ onclose }) {
  return (
    <div
      onClick={onclose}
      className="absolute z-[30] left-0 -top-30 w-full h-full bg-[#00000099]"
    ></div>
  );
}
