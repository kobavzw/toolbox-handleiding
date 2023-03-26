import React from "react";

export default function ImageTitle({ img, children }) {
  return (
    <div className="flex gap-2 items-center mb-[25px]">
      <img
        src={require("@site/static/img/modules/" + img).default}
        className="max-h-[50px]"
      />
      <h1 className="text-5xl m-0">{children}</h1>
    </div>
  );
}
