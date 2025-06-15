import React from "react";
import { Link } from "wouter";

export default function SearchSingle({ p }) {
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <Link to={`/search/${p.id}`}>
        <img
          className="flex justify-center object-fill"
          src={p.img}
          alt="post"
        />
      </Link>
    </div>
  );
}
