import { useState, useEffect } from "react";
import arrow from "../../public/arrow.svg";
import hide from "../../public/arrow-down.svg";
function NewsItem(props) {
  let commentNum = Number(props.commentNumber);

  return (
    <div
      className={`w-full mb-8 md:w-5/6 ${props.sortIndex % 2 === 0 ? "md:ml-96" : "md:ml-0"}`}
    >
      <div className="w-full md:w-3/4 transition-all duration-300 ease-in-out cursor-pointer drop-shadow-2xl hover:drop-shadow-3xl">
        <div
          id="overlay"
          className="w-full flex absolute justify-end gap-4 w-96 h-96 hover:ml-2  transition-all duration-300 ease-in-out"
        >
          <div
            id="vote"
            className="flex flex-row justify-between items-start w-1/3 h-full"
          >
            <p className="text-[13rem] leading-[13rem] md:text-[16rem] md:leading-[17rem]">
              {props.sortIndex}
            </p>
          </div>
          <div
            id="content"
            className="w-3/4 flex flex-col justify-between items-start text-left"
          >
            <div
              id="upvote"
              className="flex flex-row gap-4 items-center pt-2 transition-all duration-300 ease-in-out justify-content text-gray-950/0 hover:text-gray-950/100 hover:text-orange-200 hover:pb-2 hover:pt-0"
            >
              <img src={arrow} width="24" className="" />
              <p>upvote</p>
            </div>
            <div
              id="headline"
              className="w-full text-3xl font-bold text-orange-50"
            >
              <h1 className="btn-sec">
                <a href={`${props.url}`}>{`${props.title}`}</a>
              </h1>
            </div>
            <div id="meta" className="">
              <p className="btn-sec">{`${props.date}`}</p>
              <p className="btn-sec">{`${props.commentNumber} Comments`}</p>
              <p className="btn-sec">{`${props.pointNumber} Points`}</p>
              <p className="btn-sec">{`${props.tags}`}</p>
            </div>
            <div
              id="downvote"
              className="flex flex-row gap-4 items-center pb-2 transition-all duration-300 ease-in-out justify-content text-gray-950/0 hover:text-orange-200 hover:text-gray-950/100 hover:pt-2 hover:pb-0"
            >
              <img src={hide} width="24" className="" />
              <p>hide</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="illustration"
        className="flex z-10 flex-col flex-wrap justify-center items-center sm:items-start w-full h-96"
      >
        <div
          id="illustrationWrapper"
          className={`sm:ml-8 ${
            props.pointNumber < 1
              ? "w-48"
              : props.pointNumber < 2
                ? "w-52"
                : props.pointNumber < 3
                  ? "w-56"
                  : props.pointNumber < 4
                    ? "w-60"
                    : props.pointNumber < 5
                      ? "w-64"
                      : props.pointNumber < 10
                        ? "w-72"
                        : props.pointNumber < 20
                          ? "w-80"
                          : props.pointNumber < 50
                            ? "w-96"
                            : "w-96"
          }
aspect-square rounded-full ${
            props.commentNumber < 10
              ? "bg-orange-800"
              : props.commentNumber < 20
                ? "bg-orange-700"
                : props.commentNumber < 100
                  ? "bg-orange-600"
                  : props.commentNumber > 100
                    ? "bg-orange-500"
                    : "bg-orange-700"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default NewsItem;
