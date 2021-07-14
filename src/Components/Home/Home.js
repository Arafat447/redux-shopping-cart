import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import data from "../FakeData/FakeData";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <Products data={data}></Products>
          </div>
          <div className="col-md-3">
              cart item
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
