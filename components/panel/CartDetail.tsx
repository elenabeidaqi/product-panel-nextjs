"use client";
import { useCart } from "@/store/useCart";
import React from "react";

const CartDetail = () => {
  const { cart, count, removeAllCart } = useCart();
  let priceList = cart.map((product) => product.price);
  let totalPrice = 0
  if (priceList.length > 0) {
   totalPrice = +priceList.reduce((prev, curr) => prev + curr).toFixed(1);
  }
  return (
    <div className="p-5 mt-20 bg-gray-100 border border-gray-400 rounded-md">
      <div className="bg-white p-5 rounded-lg space-y-5">
        <div className="flex gap-2">
          <div>Total Products:</div>
          <div>{count()}</div>
        </div>

        <div className="flex gap-2">
          <div>Total Price:</div>
          <div>{totalPrice ? totalPrice : "0"}$</div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => removeAllCart()}
            disabled={cart.length ? false : true}
            className={`rounded-md bg-blue-200 w-32 text-zinc-600 py-2  ${cart.length>0 ? "hover:bg-blue-300" : "opacity-85 cursor-not-allowed"}`}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
