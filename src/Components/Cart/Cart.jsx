import React, { Component, useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItem = ctx.items.length > 0;
  const cartItemRemoveHandler=(id)=>{
    ctx.removeItem(id);
  };
  const cartItemAddHandler=(item)=>{
    ctx.addItem({...item,amount:1});
  };
  const cartItems = (
    <ul className="cart-items">
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className="button--alt">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
