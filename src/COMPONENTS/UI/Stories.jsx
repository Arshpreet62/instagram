import React, { useEffect } from "react";
import { useState } from "react";
import Context from "./context/Context";
import { useContext } from "react";

export default function Stories() {
  const { user } = useContext(Context);
  const [freindStory, setFriendStory] = useState([]);
  useEffect(() => {
    setFriendStory(user);
  }, [user]);
  return (
    <div className="flex items-center overflow-x-auto overflow-hidden  gap-5 max-h-[98px] w-full border-b border-b-gray-500/20 p-3">
      {freindStory.map((story, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 items-center w-[62px] h-[81px]"
        >
          <div className="bg-gradient-to-r from-[#FBAA47] to-[#D91A46] to-[#A60F93] rounded-full min-w-[62px] min-h-[62px] flex items-center justify-center">
            <div className="w-[59px] h-[59px] border-[3px] border-white rounded-full">
              <img
                className="w-full h-full  rounded-full object-cover"
                src={story.img}
                alt="Story"
              />
            </div>
          </div>

          <h3 className="text-[12px] text-[#262626] truncate max-w-[53px] whitespace-nowrap ">
            {story.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
