function FilterBar() {
  return (
    <>
      <div className="filter_container">
        <div>
          <select name="price" id="price">
            <option value="0">Filter by price</option>
            <option value="1">From high to low</option>
            <option value="2">From low to high</option>
          </select>
          <select name="alphabet" id="alphabet">
            <option value="0">Filter by alphabet</option>
            <option value="1">A-Z</option>
            <option value="2">Z-A</option>
          </select>
          <select name="genre" id="genre">
            <option value="0">Filter by genre</option>
            <option value="1">Novel</option>
            <option value="2">Fantasy</option>
            <option value="3">Clasic</option>
          </select>
        </div>
        <button>Apply</button>
      </div>
    </>
  );
}

export default FilterBar;
