import { useState, useEffect } from "react";
import arrow from "../../public/arrow.svg";
import hide from "../../public/arrow-down.svg";
function NewsItem() {
  return (
    <>
      <div className="transition-all hover:pl-2 ease-in-out duration-300 hover:drop-shadow-3xl cursor-pointer">
        <div id="overlay" className="flex absolute w-96 h-96 gap-4">
          <div
            id="vote"
            className="w-1/2 h-full flex flex-row justify-between items-start"
          >
            <p className="text-[16rem] h-2/3 leading-[17rem]">1</p>
          </div>
          <div
            id="content"
            className="text-left flex flex-col justify-between items-start"
          >
            <div
              id="upvote"
              className="flex flex-row justify-content items-center gap-4 pt-2 text-gray-950/0 hover:text-gray-950/100 hover:text-orange-200 hover:pb-2 hover:pt-0 transition-all duration-300 ease-in-out"
            >
              <img src={arrow} width="24" className="" />
              <p>upvote</p>
            </div>
            <div id="headline" className="font-bold text-white text-3xl w-80">
              <h1>Claude 3 beats GPT-4 on Aider's code editing benchmark</h1>
            </div>
            <div id="meta" className=" ">
              <p className="btn-sec">Date</p>
              <p className="btn-sec">Comments</p>
              <p className="btn-sec">Tags</p>
            </div>
            <div
              id="downvote"
              className="flex flex-row justify-content items-center gap-4 pb-2 text-gray-950/0 hover:text-orange-200 hover:text-gray-950/100 hover:pt-2 hover:pb-0 transition-all duration-300 ease-in-out"
            >
              <img src={hide} width="24" className="" />
              <p>hide</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="illustration"
        className="z-10 w-96 h-96 flex flex-wrap flex-col justify-center items-center"
      >
        <div
          id="illustrationWrapper"
          className="bg-orange-500 rounded-full h-80 w-80"
        >
          {/* <img src="./circle.svg" width="100" /> */}
        </div>
      </div>
    </>
  );
}

export default NewsItem;
