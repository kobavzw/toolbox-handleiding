import React from "react";
import { Link } from "react-router-dom";

export default function IndexGrid({ components }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {components.map((component, idx) => (
        <Link to={component.link} className="bg-white rounded-md border-solid border border-gray-300 flex gap-2 font-semibold items-center shadow-black/5 shadow-md hover:no-underline sm:hover:scale-105 sm:hover:z-20 sm:hover:ring-indigo-500 sm:hover:ring-2 transition ease-in-out p-2" key={idx}>
          <img
            src={require("@site/static/img/modules/" + component.image).default}
            className="grow-0 shrink-0 w-16"
          />
          <p className="m-0 text-gray-800">{component.title}</p>
        </Link>
      ))}
    </div>
  );
}
