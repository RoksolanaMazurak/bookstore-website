import React, { useState } from "react";
import CardItem from "../components/CardItem";
import FilterBar from "../components/FilterBar";
import books from "./books";
import Input from "../components/Input";

function Catalog() {
  const [items, setItems] = useState(books);

  const inputChangeHandler = (searchingText) => {
    setItems(books);
    if (searchingText.length >= 1) {
      setItems(
        items.filter(
          (item) =>
            item.title
              .toLowerCase()
              .search(searchingText.toString().toLowerCase()) !== -1 ||
            item.author
              .toLowerCase()
              .search(searchingText.toString().toLowerCase()) !== -1
        )
      );
    } else {
      setItems(books);
    }
  };

  const filterChangeHandler = (filters) => {
    const appliedFilters = {
      ...filters,
    };

    let filteredItems = [...books];

    if (appliedFilters.price !== null) {
      if (
        appliedFilters.price.toString().toLowerCase() === "from high to low"
      ) {
        filteredItems = filteredItems.sort((a, b) =>
          a.price < b.price ? 1 : -1
        );
      } else if (
        appliedFilters.price.toString().toLowerCase() === "from low to high"
      ) {
        filteredItems = filteredItems.sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
      }
    }

    if (appliedFilters.availability !== null) {
      filteredItems = filteredItems.filter(
        (item) =>
          item.availability.toLowerCase() ===
          appliedFilters.availability.toString().toLowerCase()
      );
    }

    if (appliedFilters.genre !== null) {
      filteredItems = filteredItems.filter(
        (item) =>
          item.genre.toLowerCase() ===
          appliedFilters.genre.toString().toLowerCase()
      );
    }
    setItems(filteredItems);
  };

  return (
    <>
      <Input onChangeInput={inputChangeHandler} />
      <FilterBar onChangeFilter={filterChangeHandler}></FilterBar>
      <div className="container">
        {items.map(
          ({ id, title, author, image, genre, price, availability }, idx) => (
            <CardItem
              title={title}
              author={author}
              image={image}
              genre={genre}
              price={price}
              availability={availability}
              id={id}
              key={id}
            />
          )
        )}
      </div>
    </>
  );
}

export default Catalog;
