import React from "react";
import { Link } from "react-router-dom";

export default function IndexGrid({ components }) {
  return (
    <div className="max-sm:bg-white max-sm:border border-gray-300 max-sm:shadow-md rounded-md grid sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] sm:gap-3 max-sm:divide-y divide-gray-300">
      {components.map((component, idx) => (
        <Link to={component.link} className=" leading-tight border-0 sm:bg-white sm:rounded-md border-solid sm:border border-gray-300 flex gap-2 font-semibold items-center shadow-black/5 sm:shadow-md hover:no-underline sm:hover:scale-105 sm:hover:z-20 sm:hover:ring-indigo-500 sm:hover:ring-2 transition ease-in-out p-2" key={idx}>
          <img
            src={require("@site/static/img/modules/" + component.image).default}
            className="grow-0 shrink-0 w-10 sm:w-16"
          />
          <p className="m-0 text-gray-800">{component.title}</p>
        </Link>
      ))}
    </div>
  );
}
