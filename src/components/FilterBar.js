import React, { useState } from "react";

function FilterBar(props) {
  const [filteredGenre, setFilteredGenre] = useState(null);
  const [filteredPrice, setFilteredPrice] = useState(null);
  const [filteredAvailability, setFilteredAvailability] = useState(null);

  const priceFilterHandler = (event) => {
    setFilteredPrice(event.target.value);
  };

  const availabilityFilterHandler = (event) => {
    setFilteredAvailability(event.target.value);
  };

  const genreFilterHandler = (event) => {
    setFilteredGenre(event.target.value);
  };

  const applyFilterHandler = () => {
    const filters = {
      price: filteredPrice,
      availability: filteredAvailability,
      genre: filteredGenre,
    };

    props.onChangeFilter(filters);
  };

  return (
    <>
      <div className="filter_container">
        <div>
          <select name="price" id="price" onChange={priceFilterHandler}>
            <option value="">Filter by price</option>
            <option value="from high to low">From high to low</option>
            <option value="from low to high">From low to high</option>
          </select>
          <select
            name="availability"
            id="availability"
            onChange={availabilityFilterHandler}
          >
            <option value="">Filter by availability</option>
            <option value="avaible">only avaible</option>
          </select>
          <select name="genre" id="genre" onChange={genreFilterHandler}>
            <option value="">Filter by genre</option>
            <option value="Novel">Novel</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Clasic">Clasic</option>
          </select>
        </div>
        <button onClick={applyFilterHandler}>Apply</button>
      </div>
    </>
  );
}

export default FilterBar;
