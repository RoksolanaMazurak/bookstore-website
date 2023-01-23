import CardItem from "../components/CardItem";
import FilterBar from "../components/FilterBar";

function Catalog(props) {
  const books = [
    {
      id: 1,
      title: "The Love Hypothesis",
      author: "Laura Steven",
      genre: "novel",
      price: 11,
      image: "./images/lh_book.svg",
    },
    {
      id: 2,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      genre: "clasic",
      price: 8,
      image: "./images/jane_eyre_book.svg",
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J. R. R. Tolkien.",
      genre: "fantasy",
      price: 12,
      image: "./images/hobbit_book.svg",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "clasic",
      price: 8.79,
      image: "./images/great_gatsby_book.svg",
    },
  ];
  return (
    <>
      <FilterBar></FilterBar>
      <div className="container">
        {books.map(({ title, author, image, genre, price }, id) => (
          <CardItem
            title={title}
            author={author}
            image={image}
            genre={genre}
            price={price}
            id={id}
          />
        ))}
      </div>
    </>
  );
}

export default Catalog;
