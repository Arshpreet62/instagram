import React, { useContext, useEffect, useState } from "react";
import Footer from "../home/Footer";
import Context from "../../UI/context/Context";
import SearchSingle from "./SearchSingle";
import "../../../App.css";

export default function Search() {
  const { user } = useContext(Context);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handel = (e) => {
    const value = e.target.value.trim();
    setSearch(value);
  };
  useEffect(() => {
    if (search.length > 0) {
      setSearchResult(
        user.filter((p) =>
          p.name.toLowerCase().startsWith(search.toLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <div className="flex flex-col items-center gap-3 ">
      <div className="flex flex-col items-center  h-[88px] w-full gap-3 p-3">
        <div className="flex items-center h-11 w-full gap-3 ">
          <div className="flex px-3 h-[36px] gap-3 bg-[#76768015] rounded-xl text-[#3c3c43a4] items-center grow">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.75 6C11.75 2.82436 9.17564 0.25 6 0.25C2.82436 0.25 0.25 2.82436 0.25 6C0.25 9.17564 2.82436 11.75 6 11.75C7.31725 11.75 8.53105 11.3071 9.50057 10.562L12.6517 13.7123L12.7358 13.7849C13.0294 14.0028 13.446 13.9786 13.7123 13.7123C14.0052 13.4194 14.0052 12.9445 13.7123 12.6517L10.562 9.50057C11.3071 8.53105 11.75 7.31725 11.75 6ZM1.75 6C1.75 3.65279 3.65279 1.75 6 1.75C8.34721 1.75 10.25 3.65279 10.25 6C10.25 8.34721 8.34721 10.25 6 10.25C3.65279 10.25 1.75 8.34721 1.75 6Z"
                fill="#3C3C43"
                fill-opacity="0.6"
              />
            </svg>
            <input
              placeholder="Search"
              className="h-[30px] outline-none border-none text-4 "
              type="text"
              name=""
              value={search}
              onChange={(e) => handel(e)}
            />
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.25 0C6.66421 0 7 0.335786 7 0.75C7 1.16421 6.66421 1.5 6.25 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V6.25C1.5 6.66421 1.16421 7 0.75 7C0.335786 7 0 6.66421 0 6.25V4C0 1.79086 1.79086 0 4 0H6.25ZM12 5.5C13.3807 5.5 14.5 6.61929 14.5 8V12C14.5 13.3807 13.3807 14.5 12 14.5H8C6.61929 14.5 5.5 13.3807 5.5 12V8C5.5 6.61929 6.61929 5.5 8 5.5H12ZM1.5 13.75C1.5 13.3358 1.16421 13 0.75 13C0.335786 13 0 13.3358 0 13.75V16C0 18.2091 1.79086 20 4 20H6.25C6.66421 20 7 19.6642 7 19.25C7 18.8358 6.66421 18.5 6.25 18.5H4C2.61929 18.5 1.5 17.3807 1.5 16V13.75ZM20 13.75C20 13.3358 19.6642 13 19.25 13C18.8358 13 18.5 13.3358 18.5 13.75V16C18.5 17.3807 17.3807 18.5 16 18.5H13.75C13.3358 18.5 13 18.8358 13 19.25C13 19.6642 13.3358 20 13.75 20H16C18.2091 20 20 18.2091 20 16V13.75ZM8 7H12C12.5523 7 13 7.44772 13 8V12C13 12.5523 12.5523 13 12 13H8C7.44772 13 7 12.5523 7 12V8C7 7.44772 7.44772 7 8 7ZM20 4C20 1.79086 18.2091 0 16 0H13.75C13.3358 0 13 0.335786 13 0.75C13 1.16421 13.3358 1.5 13.75 1.5H16C17.3807 1.5 18.5 2.61929 18.5 4V6.25C18.5 6.66421 18.8358 7 19.25 7C19.6642 7 20 6.66421 20 6.25V4Z"
              fill="#262626"
            />
          </svg>
        </div>
        <div className="flex items-center h-11 w-full gap-3 ">
          <div className="flex  p-2 justify-center items-center h-8 border border-gray-500/20 rounded-md gap-2">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.64289 2.16804L7.97726 0.88639C8.21625 0.656844 8.59607 0.6645 8.82562 0.903488C9.02966 1.11592 9.04628 1.43963 8.87961 1.67016L8.80852 1.75184L7.508 2.99912L10.1154 2.99997C11.7085 2.99997 13 4.29145 13 5.88458V12.6154C13 14.2085 11.7085 15.5 10.1154 15.5H3.38462C1.79149 15.5 0.5 14.2085 0.5 12.6154V5.88458C0.5 4.29145 1.79149 2.99997 3.38462 2.99997L5.776 2.99912L4.47726 1.75184C4.26483 1.5478 4.23518 1.22503 4.39243 0.987968L4.46017 0.903488C4.66421 0.691054 4.98698 0.661402 5.22404 0.818652L5.30852 0.88639L6.64289 2.16804L7.97726 0.88639L6.64289 2.16804ZM6.46051 7.8256L3.21302 8.79046C2.974 8.86147 2.83447 9.12474 2.90136 9.37849C2.96825 9.63223 3.21624 9.78036 3.45526 9.70935L6.13222 8.91399V10.2148C6.13222 10.5455 6.44147 10.7759 6.73443 10.6634L10.2802 9.30248C10.5136 9.21289 10.6344 8.93938 10.55 8.69159C10.4656 8.44379 10.208 8.31554 9.97459 8.40513L7.03104 9.53495V8.28504C7.03104 7.96914 6.74706 7.74046 6.46051 7.8256Z"
                fill="#262626"
              />
            </svg>

            <h4>IGTV</h4>
          </div>
          <div className="flex  p-2 justify-center items-center h-8 border border-gray-500/20 rounded-md gap-2">
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 0.75C8.433 0.75 10 2.317 10 4.25H10.5C11.6046 4.25 12.5 5.14543 12.5 6.25V13.25C12.5 14.3546 11.6046 15.25 10.5 15.25H2C0.89543 15.25 0 14.3546 0 13.25V6.25C0 5.14543 0.89543 4.25 2 4.25H2.75C2.75 2.317 4.317 0.75 6.25 0.75H6.5ZM3.5 6.25C3.08579 6.25 2.75 6.58579 2.75 7C2.75 7.41421 3.08579 7.75 3.5 7.75C3.91421 7.75 4.25 7.41421 4.25 7C4.25 6.58579 3.91421 6.25 3.5 6.25ZM9.25 6.25C8.83579 6.25 8.5 6.58579 8.5 7C8.5 7.41421 8.83579 7.75 9.25 7.75C9.66421 7.75 10 7.41421 10 7C10 6.58579 9.66421 6.25 9.25 6.25ZM6.5 2.25H6.25C5.14543 2.25 4.25 3.14543 4.25 4.25H8.5C8.5 3.14543 7.60457 2.25 6.5 2.25Z"
                fill="#262626"
              />
            </svg>

            <h4>Shop</h4>
          </div>
          <div className="flex  p-2 justify-center items-center h-8 border border-gray-500/20 rounded-md gap-2">
            <h4>Style</h4>
          </div>
          <div className="flex  p-2 justify-center items-center h-8 border border-gray-500/20 rounded-md gap-2">
            <h4>Sports</h4>
          </div>
        </div>
      </div>
      <div className=" flex justify-center w-full bg-gray-900">
        {user && (
          <div
            style={{ height: `calc(100vh - 132px)` }}
            className="grid  gap-[1px] w-full overflow-y-auto small"
          >
            {search.length > 0
              ? searchResult.map((p) => {
                  return <SearchSingle p={p} key={p.id} />;
                })
              : user.map((p) => {
                  return <SearchSingle p={p} key={p.id} />;
                })}
          </div>
        )}
      </div>
    </div>
  );
}
