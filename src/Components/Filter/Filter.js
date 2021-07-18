import React from "react";

const Filter = (props) => {
    const {filterBySize,products,size,sort,sortByPrice} = props;
  return (
    <div className="filter-container pt-3 pb-2">
      <div className="d-flex justify-content-between">
        <h6>{products.length} Products</h6>
        <div className="sort">
          <span>Sort: </span>
          <select value={sort} onChange={sortByPrice}>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter">
          <span>Size: </span>
          <select value={size} onChange={filterBySize}>
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
