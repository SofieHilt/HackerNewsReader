import React from "react";
import NewsItem from "./NewsItem.jsx";
import jsonData from "../../public/hackernews.json";
let title;
let url;
let tags;
let pointNumber;
let commentNumber;

const Main = () => {
  // let objectData = jsonData;
  // console.log(objectData);

  // const data = objectData.map((obj) => ({
  //   title: obj.title,
  //   url: obj.url,
  //   tags: obj._tags,
  //   date: obj.created_at,
  //   pointNumber: obj.points,
  //   commentNumber: obj.num_comments,
  // }));

  const data = [
    {
      title: "We are using JavaScript for our SaaS-Backend",
      url: "url1",
      tags: ["story", "author_ftreml", "story_25955945"],
      date: ["2021-01-29T05"],
      pointNumber: 101,
      commentNumber: 125,
    },
    {
      title: "JavaScript ES2021 Features",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 90,
      commentNumber: 85,
    },
    {
      title: "Interlude: Rethinking the JavaScript Pipeline Operator",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 10,
      commentNumber: 19,
    },
    {
      title:
        "The challenges of building a SPA with vanilla JavaScript, HTML&CSS",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 100,
      commentNumber: 0,
    },
    {
      title: "Interlude: Rethinking the JavaScript Pipeline Operator",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 3,
      commentNumber: 150,
    },
    {
      title: "Interlude: Rethinking the JavaScript Pipeline Operator",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 13,
      commentNumber: 13,
    },
    {
      title: "Interlude: Rethinking the JavaScript Pipeline Operator",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 130,
      commentNumber: 4,
    },
    {
      title: "Interlude: Rethinking the JavaScript Pipeline Operator",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 2,
      commentNumber: 3,
    },
    {
      title: "Interlude: Rethinking the JavaScript Pipeline Operator",
      url: "url2",
      tags: ["story", "author_fagnerbrack", "story_25954178"],
      date: ["2021-01-29T05"],
      pointNumber: 0,
      commentNumber: 2,
    },
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
          date={item.date}
          tags={item.tags}
          pointNumber={item.pointNumber}
          commentNumber={item.commentNumber}
        />
      ))}
    </div>
  );
};

export default Main;
