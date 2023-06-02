import React from "react";

export default function Text({ children, color = null }) {
  return (
    <span
      className={`${
        color === "red"
          ? "text-rose-600"
          : color === "green"
          ? "text-green-600"
          : color === "blue"
          ? "text-blue-600"
          : ""
      }`}
    >
      {children}
    </span>
  );
}
