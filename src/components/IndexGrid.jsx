import React from "react";
import { Link } from "react-router-dom";

function IndexGridItem({
  image,
  link,
  title,
  minMonth,
  maxMonth,
  minDay,
  maxDay,
}) {
  const date = new Date();
  const month = date.getMonth() + 1;
  if (minMonth !== undefined && maxMonth !== undefined && minMonth < maxMonth) {
    if (
      month < minMonth ||
      month > maxMonth ||
      (minDay !== undefined && month === minMonth && minDay > date.getDate()) ||
      (maxDay !== undefined && month === maxMonth && maxDay < date.getDate())
    ) {
      return <></>;
    }
  }

  return (
    <Link
      to={link}
      className="leading-tight border-0 sm:bg-white sm:rounded-md border-solid sm:border border-gray-300 flex gap-2 font-semibold items-center shadow-black/5 sm:shadow-md hover:no-underline sm:hover:scale-105 sm:hover:z-20 sm:hover:ring-indigo-500 sm:hover:ring-2 transition ease-in-out p-2"
    >
      <img
        src={require("@site/static/img/modules/" + image).default}
        className="grow-0 shrink-0 w-10 sm:w-16"
      />
      <p className="m-0 text-gray-800">{title}</p>
    </Link>
  );
}

export default function IndexGrid({ components }) {
  return (
    <div className="max-sm:bg-white max-sm:border border-gray-300 max-sm:shadow-md rounded-md grid sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] sm:gap-3 max-sm:divide-y divide-gray-300">
      {components.map((component, idx) => (
        <IndexGridItem key={idx} {...component} />
      ))}
    </div>
  );
}
