import "./Home.css";
import Items from "../components/Items";

function Home() {
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
  ];

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
      <Items data={data} />
      <button id="load_more-btn">Load More</button>
    </>
  );
}

export default Home;
