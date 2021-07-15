import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import data from "../FakeData/FakeData";
import Filter from "../Filter/Filter";
import { useState } from "react";
const Home = () => {
  const [productData, setProductData] = useState({
    products: data,
    sort: "",
    size: "",
  });

  const addToCart = (product) =>{
    console.log(product)
  }
  const filterBySize = (event) => {
    if (event.target.value === "") {
      setProductData({ size: event.target.value, products: data });
    } else {
      setProductData({
        size: event.target.value,
        products: data.filter(
          (pd) => pd.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  const sortByPrice = (e) => {
    let sort =e.target.value;
    setProductData({
      sort:sort,
      products:productData.products.sort((a,b)=>
        sort ==="lowest" ? a.price > b.price ?
        1 : -1 
        : sort === "highest" ? a.price < b.price ?
        1 : -1
        : a._id > b._id ? 1: -1
        
      )
    })
  };
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <Filter
              products={productData.products}
              sort={productData.sort}
              size={productData.size}
              filterBySize={filterBySize}
              sortByPrice={sortByPrice}
            ></Filter>
            <Products products={productData.products} addToCart={addToCart} ></Products>
          </div>
          <div className="col-md-3">cart item</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
