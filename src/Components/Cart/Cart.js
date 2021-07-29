import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import formatCurrency from "../../util";
import Modal from "react-modal";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [order,setOrder] = useState();
  const [openModal, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setOrder({
      name:data.name,
      email:data.email,
      address:data.address,
      phone:data.phone,
      cartItems:props.cartItem,
      total:props.cartItem.reduce((a,b)=>a+ b.price * b.count ,0)
    })
  };
  const closeModal = ()=>{
    setOpen(false)
  }
  const createOrder = () =>{
    setOpen(true)
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  console.log(order);
  
  return (
    <div className="cart-container pt-3 pb-2 ">
      {!props.cartItem.length ? (
        <h6 className="cart-title">Your cart is empty</h6>
      ) : (
        <h6 className="cart-title">
          You have {props.cartItem.length} products in cart
        </h6>
      )}
      {
        order && (
          <Modal 
            isOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className="modal-container">
              <h3 className="text-center">Order has been successfully placed!!</h3>
              <h6>Name:{order.name}</h6>
              <h6>Email: {order.email}</h6>
              <h6>Phone Number: {order.phone}</h6>
              <h6>Address: {order.address}</h6>
            </div>
          </Modal>
        )
      }
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
      {props.cartItem.length !== 0 && (
        <div>
          <div className="total d-flex justify-content-between mt-3">
            <div>
              <p className="total">
                Total :{" "}
                {formatCurrency(
                  props.cartItem.reduce((a, b) => a + b.price * b.count, 0)
                )}
              </p>
            </div>
            <div>
              <button
                onClick={() => setShowCheckout(true)}
                className="btn-grad mr-2"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
      {showCheckout && (
        <div className="checkout">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="name" class="form-label">
              Name:
            </label>
            <input className="form-control" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}
            <label for="Email" class="form-label">
              Email:
            </label>
            <input className="form-control" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
            <label for="Phone" class="form-label">
              Phone:
            </label>
            <input className="form-control" {...register("phone", { required: true })} />
            {errors.phone && <span>This field is required</span>}
            <label for="Address" class="form-label">
              Address:
            </label>
            <input className="form-control" {...register("address", { required: true })} />
            {errors.address && <span>This field is required</span>}
            <input onClick={createOrder} className="form-control mt-3 btn-grad submit-btn" type="submit" value="Create Order" />
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
