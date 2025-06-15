import React, { useContext, useEffect, useState } from "react";
import Context from "../../UI/context/Context";
import { Link } from "wouter";

export default function Settings() {
  const { user } = useContext(Context);
  const [img, setImg] = useState("/");

  useEffect(() => {
    if (user.length > 0) {
      setImg(user);
    }
  }, [user]);
  return (
    <div className="h-[734px] bg-[#FAFAFA] w-full">
      <header className="flex p-3 items-center  justify-between w-full h-[44px]">
        <Link to="/Profile">
          <h2 className="text-[#161515] text-[16px]">Cancel</h2>
        </Link>

        <h2 className="text-[#262626] text-[16px] font-semibold">
          Edit Profile
        </h2>
        <Link to="/Profile">
          <h2 className="text-[#3897F0] text-[16px] font-semibold">Done</h2>
        </Link>
      </header>
      <div className="h-40 w-full flex flex-col justify-center items-center gap-5 border-b border-b-[#3c3c430b]">
        <img
          className="w-[95px] h-[95px] rounded-full"
          src={img[0].img}
          alt=""
        />
        <h3 className="text-[#3897F0] text-[13px] font-semibold">
          Change Profile Photo
        </h3>
      </div>
      <div className="flex flex-col  text-black text-[15px] border-b border-b-[#3c3c430b]">
        <div className="flex justify-between w-full px-3 h-[48px] items-center">
          <h2>Name</h2>
          <h2 className="w-[247px] h-full items-center flex justify-start border-b border-b-[#3c3c430b] ">
            Jacob_West
          </h2>
        </div>
        <div className="flex justify-between w-full px-3 h-[48px] items-center">
          <h2>Username</h2>
          <h2 className="w-[247px] h-full items-center flex justify-start border-b border-b-[#3c3c430b] ">
            Jacob_w
          </h2>
        </div>
        <div className="flex justify-between w-full px-3 h-[48px] items-center">
          <h2>Website</h2>
          <h2 className="w-[247px] h-full items-center flex justify-start border-b border-b-[#3c3c430b] ">
            Website
          </h2>
        </div>
        <div className="flex justify-between w-full px-3 h-[48px] items-center">
          <h2>Bio</h2>
          <h2 className="text-start w-[247px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className=" flex justify-start p-3 items-center h-[49px] text-15 text-[#3897f0]">
        Swith to Professional Account
      </div>
      <div className="flex flex-col  text-black text-[15px] border-b border-b-[#3c3c430b]">
        <div className="h-[48px] flex items-center p-3 text-[15px] font-semibold">
          Personal Information
        </div>
        <div className="flex justify-between w-full px-3 h-[48px] items-center">
          <h2>Email</h2>
          <h2 className="w-[247px] h-full items-center flex justify-start border-b border-b-[#3c3c430b] ">
            ajs@gmail.com
          </h2>
        </div>
        <div className="flex justify-between w-full px-3 h-[48px] items-center">
          <h2>Phone</h2>
          <h2 className="w-[247px] h-full items-center flex justify-start border-b border-b-[#3c3c430b] ">
            123456789
          </h2>
        </div>
        <div className="flex justify-between w-full px-3 h-[48px] items-center">
          <h2>Gender</h2>
          <h2 className="w-[247px] h-full items-center flex justify-start border-b border-b-[#3c3c430b] ">
            Male
          </h2>
        </div>
      </div>
    </div>
  );
}
