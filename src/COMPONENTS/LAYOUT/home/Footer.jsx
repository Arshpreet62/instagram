import React from "react";
import Navi from "../../UI/Navi";

export default function Footer() {
  return (
    <div className="flex fixed bottom-0 left-1/2 -translate-x-1/2 w-full items-center justify-center flex-col bg-white">
      <Navi />
    </div>
  );
}
