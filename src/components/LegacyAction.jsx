import React from "react";

export default function LegacyAction({ img, text = null }) {
  return (
    <div className={`inline-flex rounded-md align-middle items-center px-1 py-1/2 gap-1 ${text !== null && 'bg-white ring-1 ring-gray-300 '}`}>
      <img
        src={require("@site/static/img/legacy_actions/" + img).default}
        className="max-h-[25px]"
      />
      {text !== null && <span className="text-indigo-700">{text}</span>}
    </div>
  );
}
