import React, { useContext, useState } from "react";
import Context from "../../UI/context/Context";

export default function Likes() {
  const { user } = useContext(Context);
  const [active, setActive] = useState(true);
  return (
    <div className="flex flex-col items-center gap-3 h-full w-full">
      <div className="flex h-11 w-full items-center border-b-1 border-b-gray-500/20">
        <h1
          onClick={() => setActive(true)}
          className={` flex items-center h-full justify-center text-[16] font-semibold w-[50%] ${
            active ? "text-black border-b-1 border-b-black" : "text-gray-500/20"
          }`}
        >
          Following
        </h1>
        <h1
          onClick={() => setActive(false)}
          className={`flex items-center h-full justify-center text-[16] font-semibold w-[50%] ${
            active
              ? "text-gray-500/20 "
              : "text-black border-b-1 border-b-black"
          }`}
        >
          You
        </h1>
      </div>
      {active ? (
        <>
          <div className="flex w-full h-[48px] items-center p-3 text-black text-[15px] border-b-1 border-b-gray-500/20">
            Follow Requests
          </div>
          <div
            style={{ height: `calc(100vh - 170 px)` }}
            className="flex flex-col w-full items-start  overflow-y-auto"
          >
            <div className="w-full flex flex-col border-b border-b-gray-500/20 items-start">
              <h2 className="text-black text-[15px] font-semibold p-3">New</h2>
              <div className="flex flex-col w-full">
                <div className="flex p-3 w-full h-15 justify-between items-center ">
                  <div className="flex w-full h-full items-center gap-2 text-[13px] ">
                    <img
                      className="rounded-full w-11 h-11"
                      src={user.length > 0 ? user[0].img : "/"}
                      alt=""
                    />
                    <div>
                      <span className="font-semibold mr-1">
                        {user.length > 0 ? user[0].name : "jacob"}
                      </span>
                      liked your post
                    </div>
                  </div>
                  <img
                    className=" w-11 h-11"
                    src={user.length > 0 ? user[1].img : "/"}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col border-b border-b-gray-500/20 items-start">
              <h2 className="text-black text-[15px] font-semibold p-3">
                Today
              </h2>
              <div className="flex flex-col w-full">
                <div className="flex p-3 w-full h-15 justify-between items-center ">
                  <div className="flex w-full h-full items-center gap-2 text-[13px] ">
                    <img
                      className="rounded-full w-11 h-11"
                      src={user.length > 0 ? user[2].img : "/"}
                      alt=""
                    />
                    <div>
                      <span className="font-semibold mr-1">
                        {user.length > 0 ? user[2].name : "jacob"}
                      </span>
                      liked your post
                    </div>
                  </div>
                  <img
                    className=" w-11 h-11"
                    src={user.length > 0 ? user[3].img : "/"}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col border-b border-b-gray-500/20 items-start">
              <h2 className="text-black text-[15px] font-semibold p-3">
                This Week
              </h2>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col w-full ">
                  <div className="flex p-3 w-full h-15 justify-between items-center ">
                    <div className="flex w-full h-full items-center gap-2 text-[13px]">
                      <img
                        className="rounded-full w-11 h-11"
                        src={
                          user.length > index + 2 ? user[index + 2].img : "/"
                        }
                        alt=""
                      />
                      <div>
                        <span className="font-semibold mr-1">
                          {user.length > index + 2
                            ? user[index + 2].name
                            : "jacob"}
                        </span>
                        liked your post
                      </div>
                    </div>
                    <img
                      className="w-11 h-11"
                      src={user.length > index + 3 ? user[index + 3].img : "/"}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col border-b border-b-gray-500/20 items-start">
              <h2 className="text-black text-[15px] font-semibold p-3">
                This Month
              </h2>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex flex-col w-full">
                  <div className="flex p-3 w-full h-15 justify-between items-center ">
                    <div className="flex w-full h-full items-center gap-2 text-[13px]">
                      <img
                        className="rounded-full w-11 h-11"
                        src={
                          user.length > index + 2 ? user[index + 2].img : "/"
                        }
                        alt=""
                      />
                      <div>
                        <span className="font-semibold mr-1">
                          {user.length > index + 2
                            ? user[index + 2].name
                            : "jacob"}
                        </span>
                        liked your post
                      </div>
                    </div>
                    <img
                      className="w-11 h-11"
                      src={user.length > index + 3 ? user[index + 3].img : "/"}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
