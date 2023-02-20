import React, { useState, useEffect } from "react";
import "./Home.css";
import Items from "../components/Items";

const data = [
  {
    id: 1,
    title: "The little prince",
    author: "Antoine de Saint-Exupery",
    image: "../images/little_prince_book.svg",
  },
  {
    id: 2,
    title: "Turtles all the way down",
    author: "John Green",
    image: "../images/tatwd_book.svg",
  },
  {
    id: 3,
    title: "Fairytale",
    author: "Stephen King",
    image: "../images/fairytale_book.svg",
  },
  {
    id: 4,
    title: "It ends with us",
    author: "Colleen Hoover",
    image: "../images/iewu_book.svg",
  },
  {
    id: 5,
    title: "Roof toppers",
    author: "Katherine Rundell",
    image: "../images/roof_toppers_book.svg",
  },
  {
    id: 6,
    title: "The maid",
    author: "Nita Prose",
    image: "../images/maid_book.svg",
  },
  {
    id: 7,
    title: "The peculiar",
    author: "Stefan Bachmann",
    image: "../images/peculiar_book.svg",
  },
  {
    id: 8,
    title: "The foundling",
    author: "Ann Leary",
    image: "../images/foundling_book.svg",
  },
];

function Home() {
  const [count, setCount] = useState(4);
  const [items, setItems] = useState(data);
  const [value, setValue] = useState("View More");

  useEffect(() => {
    setItems(() => data.slice(0, count));
  }, [count]);

  const viewMore = () => {
    if (count < 8) {
      setCount(count + 4);
      setValue("View Less");
    } else {
      setCount(count - 4);
      setValue("View More");
    }
  };

  return (
    <>
      <div className="hero__container">
        <div>
          <h1>Build your</h1>
          <h1 className="hero__second_header">
            own <span>world!</span>
          </h1>
          <p className="hero__text">
            welcome to our bookstore! <br />
            we have the largest choice of books!
          </p>
          <button id="go-to-catalog-btn">Go to catalog</button>
        </div>
        <img src="../images/hero_image.svg" alt="Illustration" />
      </div>
      <div className="section_header">
        <h2>
          Upcoming books
          <img
            src="../images/star_icon.svg"
            alt="star_icon"
            className="star_icon"
          />
        </h2>
        <p className="section_subheader">for March</p>
      </div>
      <div id="item-container">
        <Items data={items} />
      </div>
      <button id="load_more-btn" onClick={viewMore}>
        {value}
      </button>
    </>
  );
}

export default Home;
