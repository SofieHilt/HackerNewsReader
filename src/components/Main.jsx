import React from "react";
import NewsItem from "./NewsItem.jsx";

let title;
let url;
let tags;
let pointNumber;
let commentNumber;

const Main = () => {
  const data = [
    // sample data objects
    {
      title: "Title 1",
      url: "url1",
      tags: ["tag1"],
      pointNumber: 10,
      commentNumber: 5,
    },
    {
      title: "Title 2",
      url: "url2",
      tags: ["tag2"],
      pointNumber: 20,
      commentNumber: 8,
    },
    // add more data objects as needed
  ];

  return (
    <div className="gap-4 m-0 p-0 flex flex-col justify-center items-center">
      <form className="pb-8">
        <input
          className="p-2 rounded-l-full bg-black text-white focus:ring-0 ring-0 ring-black-500/10 "
          type="text"
          placeholder="Topic.."
        ></input>
        <button className="p-2 text-white rounded-r-full bg-orange-500 hover:bg-white hover:text-black">
          Search
        </button>
      </form>
      {/* Use map function to iterate over data and return an array of NewsItem components */}
      {data.map((item, index) => (
        <NewsItem
          key={index}
          sortIndex={index + 1}
          title={item.title}
          url={item.url}
          tags={item.tags}
          pointNumber={item.pointNumber}
          commentNumber={item.commentNumber}
        />
      ))}
    </div>
  );
};

export default Main;
