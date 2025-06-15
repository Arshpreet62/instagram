import React from "react";
import Stories from "../../UI/Stories";
import Scroll from "../../UI/Scroll";

export default function Body() {
  return (
    <div className="flex flex-col w-full ">
      <Stories />
      <Scroll />
    </div>
  );
}
