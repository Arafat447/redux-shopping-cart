import React from "react";
const Products = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {props.products.map((pd) => (
            <div className="col-md-4 card-item">
              <img className="img-fluid" src={pd.image} alt="" />
              <h6>{pd.title}</h6>
              <div className="mt-3 d-flex justify-content-between">
                <p className="price">{pd.price}</p>
                <button onClick={()=>props.addToCart(pd)} className="btn-primary cart-btn">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
