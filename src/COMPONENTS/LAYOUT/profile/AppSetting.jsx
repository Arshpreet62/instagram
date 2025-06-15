import React from "react";
import {
  FaArrowLeft,
  FaUser,
  FaVoicemail,
  FaBookmark,
  FaBell,
} from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { GoChevronRight } from "react-icons/go";
import { IoArchiveOutline } from "react-icons/io5";
import { MdMonitorHeart } from "react-icons/md";
export default function AppSetting() {
  return (
    <div className="flex bg-[#1b1b1b] flex-1 flex-col">
      <div className="flex justify-start gap-5 text-white text-[20px] h-12 font-semibold items-center">
        <FaArrowLeft />
        <div>Settings And activity </div>
      </div>

      <div
        style={{ height: `calc(100vh - 100px)` }}
        className="flex flex-col overflow-y-auto"
      >
        <div>
          <div className="flex justify-between px-3 text-white text-[15px] font-semibold">
            <h3>Your account</h3>
            <h3 className="flex items-center ">
              <span className="mr-2 text-white">
                <FaVoicemail />
              </span>
              Meta
            </h3>
          </div>
          <div className="flex flex-col items-start text-white text-[10px] p-3 gap-1 font-semibold border-b-4 border-b-gray-500/20">
            <div className="flex items-center justify-start gap-2 ">
              <div className="flex border border-white rounded-full overflow-hidden text-2xl">
                <FaUser />
              </div>
              <div className="flex  flex-col justify-center items-start">
                <div>Accounts center</div>
                <div>Password</div>
              </div>
            </div>
            <div className="h-10 text-[9px] text-gray-300">
              Manage your connected experiences
            </div>
          </div>
          <div className=" flex p-3  flex-col items-start text-gray-300 text-[15px] font-semibold border-b-4 border-b-gray-500/20">
            <div className="flex h-5  justify-start items-center text-[10px]">
              How do you want to use your account?
            </div>
            <div className="flex  w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <FaBookmark />
                Saved
              </div>
              <GoChevronRight />
            </div>
            <div className="flex  w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <IoArchiveOutline />
                Archive
              </div>
              <GoChevronRight />
            </div>
            <div className="flex  w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <MdMonitorHeart />
                Your Activity
              </div>
              <GoChevronRight />
            </div>
            <div className="flex  w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <FaBell />
                Notifications
              </div>
              <GoChevronRight />
            </div>
            <div className="flex  w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <LuTimer />
                Time management
              </div>
              <GoChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
