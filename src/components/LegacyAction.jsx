import React from "react";

export default function LegacyAction({ img = null, text = null }) {
  return (
    <p className={`${img === null ? 'py-1 px-2' : 'py-1/2 px-1'} m-0 inline-flex rounded-md align-middle items-center gap-1 ${text !== null && 'bg-white ring-1 ring-gray-300 '}`}>
      {img !== null && <img
        src={require("@site/static/img/legacy_actions/" + img).default}
        className="max-h-[25px]"
      />}
      {text !== null && <span className="text-indigo-700">{text}</span>}
    </p>
  );
}
