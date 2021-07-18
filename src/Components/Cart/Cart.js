import React from "react";
import formatCurrency from "../../util";

const Cart = (props) => {
  return (
    <div className="cart-container pt-3 pb-2 ">
      {!props.cartItem.length ? (
        <h6 className="cart-title">Your cart is empty</h6>
      ) : (
        <h6 className="cart-title">
          You have {props.cartItem.length} products in cart
        </h6>
      )}
      <div className="cart-details">
        {props.cartItem.map((item) => (
          <div className="cart-items-info">
            <div className="row">
              <div className="col-2">
                <img src={item.image} alt="" />
              </div>
              <div className="col-10">
                <small>{item.title}</small>
              </div>
              <div className="remove">
                <div className="float-end d-inline">
                  <small className="p">
                    {formatCurrency(item.price)} x {item.count}
                  </small>
                  <button
                    onClick={() => props.removeItem(item)}
                    className="btn-grad"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      {props.cartItem.length!==0 && (
          <div>
            <div className="total d-flex justify-content-between mt-3">
              <div>
                <p className="total">
                  Total :{" "}
                  {formatCurrency(
                    props.cartItem.reduce((a, b) => a + b.price * b.count,0)
                  )}
                </p>
              </div>
              <div>
                <button className="btn-grad mr-2">Proceed</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cart;
