import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { LuHeart, LuMessageCircle, LuBookmark } from "react-icons/lu";
import { Link } from "wouter";

export default function PostSingle({
  index,
  posts,
  p,
  setPage,
  loading,
  discription,
}) {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [save, setSave] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [box, setBox] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setComments((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };
  const { ref, inView } = useInView({ threshold: 0.7 });
  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);
  return (
    <div
      ref={index === posts.length - 1 ? ref : null}
      className="flex flex-col w-full  border-b border-b-gray-500/20"
    >
      <div className="flex items-center justify-between w-full px-3 py-3 bg-white border-b border-b-gray-500/20 relative">
        <div className="flex  justify-between  items-center gap-3 ">
          <div className="bg-black h-8 w-8  rounded-full overflow-hidden ">
            <img className="object-fill" src={p.img} alt="" />
          </div>
          <div className="flex flex-col items-start">
            <h4 className="flex gap-1 items-center text-[13px] text-black">
              {p.name ? p.name : "jacob west"}
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.94911 0L6.18132 0.803456L7.65231 0.793732L8.25454 2.13583L9.49727 2.92292L9.2783 4.37756L9.89821 5.71157L8.92757 6.81691L8.72785 8.2743L7.31371 8.6794L6.35777 9.79747L4.94911 9.37371L3.54044 9.79747L2.5845 8.6794L1.17036 8.2743L0.970641 6.81691L0 5.71157L0.619915 4.37756L0.400947 2.92292L1.64368 2.13583L2.2459 0.793732L3.71689 0.803456L4.94911 0ZM6.25793 3.51871L4.28924 5.60893L3.64029 4.91992C3.48882 4.75911 3.23567 4.75153 3.07486 4.90299C2.91404 5.05446 2.90646 5.30761 3.05793 5.46842L3.99805 6.46659C4.15597 6.63425 4.4225 6.63425 4.58042 6.46659L6.84029 4.06721C6.99175 3.9064 6.98417 3.65325 6.82336 3.50178C6.66254 3.35032 6.40939 3.3579 6.25793 3.51871Z"
                    fill="#3897F0"
                  />
                </svg>
              </span>
            </h4>
            <h4 className="text-[11px] text-[#161616] pl-[2px]">
              {p.location ? p.location : "London"}
            </h4>
          </div>
        </div>
        <div
          onClick={() => setBox((p) => !p)}
          className=" flex justify-center items-center h-10 w-10"
        >
          <svg
            width="14"
            height="4"
            viewBox="0 0 14 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.5 0.5C2.32843 0.5 3 1.17157 3 2C3 2.82843 2.32843 3.5 1.5 3.5C0.671573 3.5 0 2.82843 0 2C0 1.17157 0.671573 0.5 1.5 0.5ZM7 0.5C7.82843 0.5 8.5 1.17157 8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5ZM12.5 0.5C13.3284 0.5 14 1.17157 14 2C14 2.82843 13.3284 3.5 12.5 3.5C11.6716 3.5 11 2.82843 11 2C11 1.17157 11.6716 0.5 12.5 0.5Z"
              fill="#262626"
            />
          </svg>
        </div>

        {box && (
          <Link
            to={`/home/${p.id}`}
            className="h-15 w-30 flex justify-center items-center absolute right-1 top-10 bg-gray-800/80 rounded-xl text-white"
          >
            <div>Profile</div>
          </Link>
        )}
      </div>
      <div className="bg-[#262626] flex items-center justify-center w-full">
        <img
          className="w-[375px] h-[375px] object-fill"
          src={p.img}
          alt="post"
        />
      </div>
      <div className="flex flex-col  bg-white justify-start">
        <div className="flex justify-between p-3 items-center">
          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <LuHeart
                onClick={() => setLiked((prev) => !prev)}
                className={`size-6.5   ${liked && "fill-pink-500 stroke-0"}`}
                strokeWidth={1.5}
              />
            </div>

            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <LuMessageCircle
                onClick={() => setComment((prev) => !prev)}
                className={`size-6.5   ${comment && "fill-black stroke-0"}`}
                strokeWidth={1.5}
              />
            </div>

            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.1226 1.62889L12.4374 19.8824C12.101 20.4571 11.2383 20.341 11.0658 19.6978L8.31543 9.44223L8.29276 9.41018C8.27233 9.37479 8.25511 9.33844 8.24101 9.30145L0.721173 1.78033C0.2487 1.30786 0.583325 0.5 1.2515 0.5H22.4754C23.0547 0.5 23.4153 1.1289 23.1226 1.62889ZM20.4224 3.27211L9.85082 9.37561L12.0496 17.5758L20.4224 3.27211ZM3.06216 2L19.6274 1.99907L9.12507 8.06257L3.06216 2Z"
                  fill="#262626"
                />
              </svg>
            </div>
          </div>
          <LuBookmark
            onClick={() => setSave((prev) => !prev)}
            className={`size-6.5   ${save && "fill-black stroke-0"}`}
            strokeWidth={1.5}
          />
        </div>
        {comment && (
          <div className="flex flex-col gap-3 text-[11px]  justify-start px-5 pb-2 ">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-gray-300 w-full rounded-md h-9 border-2 border-gray-500 text-lg p-1"
              placeholder="Add a comment"
              type="text"
              name=""
              id=""
            />
            <div className="flex flex-col gap-1 items-start w-full h-40  overflow-y-auto">
              {comments.map((com, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center text-start max-w-full w-full text-[15px] text-gray-600 border-[2px] border-gray-500 p-1 break-all rounded-md"
                  >
                    {com}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex flex-col text-[11px]  justify-center px-5 pb-2 ">
          <div className="flex gap-2 text-[13px]">
            <img className="w-4 h-4 rounded-full" src={p.img} alt="" />
            <p className="text-[13px]">
              Liked by{" "}
              <span className="font-medium">{p.name ? p.name : "jacob"}</span>{" "}
              and
              <span className="font-medium"> {posts.length} others</span>
            </p>
          </div>
          {discription ? (
            <p className=" flex items-start gap-1">
              <span className="font-medium">Jabob </span>
              {discription}
            </p>
          ) : (
            <p className=" flex items-start">
              <span className="font-medium">{p.name}</span> its my fav image
            </p>
          )}
        </div>
      </div>
      {loading && (
        <div className="flex text-black justify-center items-center h-[50px] ">
          loading....
        </div>
      )}
    </div>
  );
}
