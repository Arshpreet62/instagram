import React from "react";
import Header from "./Header";
import Body from "./Body";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <Body />
    </div>
  );
}
