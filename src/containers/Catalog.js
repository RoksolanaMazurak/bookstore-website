import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import FilterBar from "../components/FilterBar";
import Input from "../components/Input";
import { getAllItems, getFilteredItems } from "../api/api";
import Loader from "../components/Loader";

function Catalog() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllItems().then((res) => {
      setItems(res);
      setLoader(false);
    });
  }, []);

  const inputChangeHandler = (searchingText) => {
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
      getAllItems().then((res) => {
        setItems(res);
      });
    }
  };

  const filterChangeHandler = (filters) => {
    const appliedFilters = {
      ...filters,
    };

    getFilteredItems(appliedFilters).then((res) => {
      setItems(res);
      setLoader(false);
    });
  };

  return (
    <>
      <Input onChangeInput={inputChangeHandler} />
      <FilterBar onChangeFilter={filterChangeHandler}></FilterBar>
      <div className="container">
        {loader && <Loader />}
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
