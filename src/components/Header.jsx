import React from "react";

const Header = () => {
  return (
    <>
      <nav className="m0 p-2 z-20 fixed hover:shadow-3xl shadow-xl top-0 left-0 w-full min-h-12 bg-orange-500 flex flex-row justify-around items-center gap-4 ">
        <span className="font-bold w-8 h-8 p-2 text-white ml-4 border-white border-2 rounded-full flex justify-center items-center">
          Y
        </span>
        <ul className="w-full flex flex-row flex-wrap justify-start items-start gap-4 ">
          <li className="btn-nav font-bold">
            <a href="url" />
            Hacker News
          </li>
          <li className="btn-nav">
            <a href="url" />
          </li>
          <li className="btn-nav">
            <a href="url" />
            new
          </li>
          <li className="btn-nav">
            <a href="url" />
            past{" "}
          </li>
          <li className="btn-nav">
            <a href="url" />
            comments
          </li>
          <li className="btn-nav">
            <a href="url" />
            ask
          </li>
          <li className="btn-nav">
            <a href="url" />
            show
          </li>
          <li className="btn-nav">
            <a href="url" />
            jobs
          </li>
          <li className="btn-nav">
            <a href="url" />
            submit
          </li>
          <li className="btn-nav">
            <a href="url" />
            login
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
