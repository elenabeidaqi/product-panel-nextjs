import CartDetail from "@/components/panel/CartDetail";
import NavBar from "@/components/panel/NavBar";
import CartPage from "@/pages/panel/cart/CartPage";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5 flex gap-10">
        <CartPage /> 
        <CartDetail />
      </div>
    </div>
  );
};

export default page;
