import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import data from "../FakeData/FakeData";
import Filter from "../Filter/Filter";
import { useState } from "react";
import Cart from "../Cart/Cart";
const Home = () => {
  const [productData, setProductData] = useState({
    products: data,
    sort: "",
    size: "",
  });
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) =>{
    let alreadyExists = false;
    const cartItems = [...cartItem];
    cartItems.forEach(item=>{
      if(item._id===product._id){
        alreadyExists=true;
        item.count++;
      }
    })
    if(!alreadyExists){
      cartItems.push({...product,count:1})
    }
    setCartItem(cartItems)
  }
  const removeItem = (item) => {
    const cartItems = [...cartItem]
    setCartItem(cartItems.filter(x => x._id!==item._id))
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
          <div className="col-md-3">
             <Cart cartItem={cartItem} removeItem={removeItem} ></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
