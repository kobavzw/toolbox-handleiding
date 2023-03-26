import React from "react";

export default function Thumbnails({ img }) {
  if (typeof img === "string") {
    img = [img];
  }
  return (
    <div className={`.markdown mb-5 grid sm:grid-cols-2 ${(img.length === 3 || img.length > 4) && "md:grid-cols-3"}`}>
      {img.map((url, idx) => (
        <img key={idx} src={url} />
      ))}
    </div>
  );
}
