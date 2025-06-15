import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col  gap-5 items-center justify-center h-full ">
      <h1 className="text-7xl">404 not Found</h1>
      <Link to="/" className="p-2  rounded-2xl bg-blue-500 text-white">
        return
      </Link>
    </div>
  );
}
