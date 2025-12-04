import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from "../cartContext/CartContext";

function Header({ data,count }) {

    // console.log(data);
     const { totalItems } = useCart();



    return (
        <>
            <div className='flex justify-between px-10 py-5 items-center'>
                <div>
                    <h1 className='text-xl'>{data.restaurant_name}</h1>
                </div>

                <div>
                    <div className='flex items-center gap-5'>
                        <h1> My Orders</h1>
                        <div className='flex relative'>
                            <FaShoppingCart className='text-2xl text-slate-500' />
                            <div className='text-white bg-red-500 w-5 h-5 flex justify-center items-center rounded-full absolute left-4 bottom-3'><span>{totalItems}</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header