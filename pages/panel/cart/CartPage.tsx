"use client"
import CartTable from '@/components/panel/CartTable';
import { useCart } from '@/store/useCart';
import React from 'react'

const CartPage = () => {
    const { cart } = useCart();
    
  return (
    <div className='flex flex-col xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full p-5 mt-20 bg-gray-100 border border-gray-400 rounded-md'>
        <CartTable data={cart}/>
    </div>
  )
}

export default CartPage
