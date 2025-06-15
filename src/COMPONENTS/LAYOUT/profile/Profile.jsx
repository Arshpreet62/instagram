import React, { useContext, useEffect, useState } from "react";
import Context from "../../UI/context/Context";
import { Link } from "wouter";

export default function Profile() {
  const { user, post } = useContext(Context);
  const [myPost, setMyPost] = useState(true);

  const [img, setImg] = useState("/");

  useEffect(() => {
    if (user.length > 0) {
      setImg(user);
    }
  }, [user]);
  return (
    <div className="bg-[#FAFAFA] w-full">
      <header className="h-[420px] overflow-hidden w-full">
        <div className="flex  items-center pt-2 h-11 justify-end px-3 relative ">
          <div className="flex gap-1 w-full  items-center  absolute top-0 h-13  justify-center">
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.25 0C5.76878 0 7 1.23122 7 2.75L7.0008 4.26557C7.98699 4.38895 8.75 5.23037 8.75 6.25V9.75C8.75 10.8546 7.85457 11.75 6.75 11.75H2C0.89543 11.75 0 10.8546 0 9.75V6.25C0 5.31809 0.637377 4.53504 1.49998 4.31301L1.5 2.75C1.5 1.23122 2.73122 0 4.25 0ZM4.25 1.2C3.39396 1.2 2.7 1.89396 2.7 2.75L2.699 4.25H5.8V2.75C5.8 1.89396 5.10604 1.2 4.25 1.2Z"
                fill="#262626"
              />
            </svg>
            <svg
              width="60"
              height="16"
              viewBox="0 0 60 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.9375 3.03125C3.57031 3.03125 4.09375 2.52344 4.09375 1.88281C4.09375 1.25 3.57031 0.734375 2.9375 0.734375C2.29688 0.734375 1.77344 1.25 1.77344 1.88281C1.77344 2.52344 2.29688 3.03125 2.9375 3.03125ZM3.89062 4.46094H1.96094V13.3047C1.96094 14.0938 1.65625 14.4141 0.796875 14.4141C0.757812 14.4141 0.570312 14.4141 0.546875 14.4062V15.8984C0.601562 15.9062 0.914062 15.9141 1.01562 15.9141C2.92969 15.9141 3.89062 15.0781 3.89062 13.3281V4.46094ZM8.31844 13.1406C9.43563 13.1406 10.3731 12.6562 10.8497 11.8281H10.9825V13H12.8497V7.16406C12.8497 5.35938 11.6153 4.29688 9.42 4.29688C7.38875 4.29688 5.97469 5.25 5.81844 6.74219H7.64656C7.82625 6.15625 8.43563 5.83594 9.32625 5.83594C10.3731 5.83594 10.9356 6.3125 10.9356 7.16406V7.89844L8.7325 8.03125C6.65438 8.14844 5.49031 9.04688 5.49031 10.5781C5.49031 12.1406 6.67 13.1406 8.31844 13.1406ZM8.88875 11.6484C8.02938 11.6484 7.41219 11.2188 7.41219 10.4844C7.41219 9.77344 7.92 9.375 9.00594 9.30469L10.9356 9.17188V9.86719C10.9356 10.8828 10.0606 11.6484 8.88875 11.6484ZM22.2384 7.3125C22.0353 5.54688 20.7072 4.29688 18.5119 4.29688C15.9416 4.29688 14.4338 5.94531 14.4338 8.71094C14.4338 11.5078 15.9494 13.1719 18.5197 13.1719C20.6838 13.1719 22.0275 11.9688 22.2384 10.2031H20.3947C20.1916 11.1016 19.5197 11.5781 18.5119 11.5781C17.1916 11.5781 16.3947 10.5234 16.3947 8.71094C16.3947 6.92969 17.1838 5.88281 18.5119 5.88281C19.5744 5.88281 20.215 6.48438 20.3947 7.3125H22.2384ZM27.4475 13.1719C30.0022 13.1719 31.5569 11.5 31.5569 8.72656C31.5569 5.96875 29.9944 4.29688 27.4475 4.29688C24.9084 4.29688 23.3381 5.97656 23.3381 8.72656C23.3381 11.5 24.885 13.1719 27.4475 13.1719ZM27.4475 11.5859C26.0959 11.5859 25.3225 10.5391 25.3225 8.73438C25.3225 6.92969 26.0959 5.88281 27.4475 5.88281C28.7913 5.88281 29.5647 6.92969 29.5647 8.73438C29.5647 10.5391 28.7991 11.5859 27.4475 11.5859ZM37.93 13.1406C40.0863 13.1406 41.4378 11.4453 41.4378 8.73438C41.4378 6.00781 40.0941 4.32031 37.93 4.32031C36.7581 4.32031 35.7738 4.89062 35.3284 5.82031H35.1956V1.15625H33.2581V13H35.1253V11.6484H35.2581C35.7425 12.5859 36.7347 13.1406 37.93 13.1406ZM37.3206 5.9375C38.6409 5.9375 39.4456 6.99219 39.4456 8.73438C39.4456 10.4766 38.6488 11.5312 37.3206 11.5312C35.9925 11.5312 35.1644 10.4609 35.1644 8.73438C35.1644 7.00781 36.0003 5.9375 37.3206 5.9375ZM48.8578 15.2812V13.8359H41.4828V15.2812H48.8578ZM59.8403 4.46094H57.9106L56.4966 10.875H56.3638L54.7075 4.46094H52.8559L51.2153 10.875H51.0825L49.6606 4.46094H47.7075L50.02 13H52.0356L53.6919 6.8125H53.8247L55.4888 13H57.5278L59.8403 4.46094Z"
                fill="#262626"
              />
            </svg>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5985 0.151489L6.09853 4.65149L1.59853 0.151489L0.75 1.00002L6.09853 6.34855L11.4471 1.00002L10.5985 0.151489Z"
                fill="#262626"
              />
            </svg>
          </div>
          <svg
            width="19"
            height="15"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.25 0H1.25L1.14823 0.00684662C0.782154 0.056509 0.5 0.370304 0.5 0.75C0.5 1.16421 0.835786 1.5 1.25 1.5H20.25L20.3518 1.49315C20.7178 1.44349 21 1.1297 21 0.75C21 0.335786 20.6642 0 20.25 0ZM1.25 8H20.25C20.6642 8 21 8.33579 21 8.75C21 9.1297 20.7178 9.44349 20.3518 9.49315L20.25 9.5H1.25C0.835786 9.5 0.5 9.16421 0.5 8.75C0.5 8.3703 0.782154 8.05651 1.14823 8.00685L1.25 8ZM1.25 16H20.25C20.6642 16 21 16.3358 21 16.75C21 17.1297 20.7178 17.4435 20.3518 17.4932L20.25 17.5H1.25C0.835786 17.5 0.5 17.1642 0.5 16.75C0.5 16.3703 0.782154 16.0565 1.14823 16.0068L1.25 16Z"
              fill="#262626"
            />
          </svg>
        </div>
        <div className="flex flex-col h-[320px] max-w-200  min-w-fit border-b border-b-gray-500/20">
          <div className="flex flex-col items-start gap-2 h-[157px] w-full px-2">
            <div className="flex w-full gap-5 justify-between items-center text-[13px] p-2">
              <div className="flex h-[96px] w-[96px] justify-center items-center rounded-full bg-[#C7C7CC]">
                <img
                  className=" h-[91px] w-[91px] rounded-full border-[4px] border-white object-contain "
                  src={img[0].img}
                  alt="profile-pic"
                />
              </div>
              <div className="flex flex-col ">
                <h3 className="text-[16px] font-bold">54</h3>
                <h3>Posts</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[16px] font-bold">54</h3>
                <h3>Followers</h3>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-[16px] font-bold">54</h3>
                <h3>Followings</h3>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start h-[49px] w-[343px] text-[12px]">
              <h3 className="font-bold">Jacob West</h3>
              <h3>Jacob West</h3>
              <h3>Jacob West</h3>
            </div>
            <Link className="flex justify-center w-full" to="/setting">
              <div className="mt-2 flex justify-center  items-center w-[343px] h-[29px] border-2 border-[#3c3c432e] rounded-sm">
                <h3>Edit Profile</h3>
              </div>
            </Link>
            <div className="flex justify-start h-[90px] w-[310px] mt-2 mb-2 gap-2">
              <div className="flex flex-col items-center justify-start h-[83px] w-16">
                <div className="flex justify-center items-center bg-white min-h-16  min-w-16 rounded-full border-[2px] border-[#C7C7CC] text-2xl text-gray-500">
                  +
                </div>
                <h3>New</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  h-[44px]">
          <div
            onClick={() => setMyPost(true)}
            className={`flex justify-center items-center h-[44px] w-[50%] bg-[#FAFAFA] ${
              myPost && "border-b border-b-black"
            }`}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 22.5H22.5V0H0V22.5ZM7 21H1.5V15.5H7V21ZM14 15.5H8.5V21H14V15.5ZM15.5 15.5H21V21H15.5V15.5ZM7 8.5H1.5V14H7V8.5ZM8.5 8.5H14V14H8.5V8.5ZM21 8.5H15.5V14H21V8.5ZM21 1.5V7H15.5V1.5H21ZM7 1.5H1.5V7H7V1.5ZM8.5 1.5H14V7H8.5V1.5Z"
                fill="#262626"
                fill-opacity={!myPost ? "0.4" : "1"}
              />
            </svg>
          </div>
          <div
            onClick={() => setMyPost(false)}
            className={`flex justify-center items-center h-[44px] w-[50%] bg-[#FAFAFA] ${
              !myPost && "border-b border-b-black"
            }`}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1036 0.636597L14.4676 3.00005H20.5C22.1569 3.00005 23.5 4.3432 23.5 6.00005V21C23.5 22.6569 22.1569 24 20.5 24H3C1.34315 24 0 22.6569 0 21V6.00005C0 4.3432 1.34315 3.00005 3 3.00005H9.03L11.3962 0.636437C11.5918 0.441611 11.9082 0.441682 12.1036 0.636597ZM11.7495 2.4037L9.94366 4.20755C9.75615 4.39485 9.50197 4.50005 9.23694 4.50005H3C2.17157 4.50005 1.5 5.17162 1.5 6.00005V21C1.5 21.8285 2.17157 22.5 3 22.5H4C4 19.7386 6.23858 17.5 9 17.5H14.5C17.2614 17.5 19.5 19.7386 19.5 22.5H20.5C21.3284 22.5 22 21.8285 22 21V6.00005C22 5.17162 21.3284 4.50005 20.5 4.50005H14.2605C13.9953 4.50005 13.741 4.39472 13.5534 4.20723L11.7495 2.4037ZM14.5 19C16.433 19 18 20.5671 18 22.5H5.5C5.5 20.5671 7.067 19 9 19H14.5ZM11.75 6.50005C14.3734 6.50005 16.5 8.6267 16.5 11.25C16.5 13.8734 14.3734 16 11.75 16C9.12665 16 7 13.8734 7 11.25C7 8.6267 9.12665 6.50005 11.75 6.50005ZM8.5 11.25C8.5 9.45512 9.95507 8.00005 11.75 8.00005C13.5449 8.00005 15 9.45512 15 11.25C15 13.045 13.5449 14.5 11.75 14.5C9.95507 14.5 8.5 13.045 8.5 11.25Z"
                fill="black"
                fill-opacity={myPost ? "0.4" : "1"}
              />
            </svg>
          </div>
        </div>
      </header>
      {myPost ? (
        <div className="grid grid-cols-3 gap-[1px] h-[295px] overflow-auto">
          {post &&
            post.map((p) => {
              return (
                <div className="w-31 h-31 ">
                  <img
                    className="w-full h-full object-cover"
                    src={p.img}
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-[1px] h-[295px] overflow-auto">
          <div className="w-31 h-31 bg-gray-400/20"></div>
        </div>
      )}
    </div>
  );
}
