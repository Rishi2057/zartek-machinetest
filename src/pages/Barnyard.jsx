import React, { useState } from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import veg from '../../public/veglogo.jpg'
import nonveg from '../../public/nonveglogo.jpg'
import { useCart } from '../cartContext/CartContext'

function Barnyard({baryardDishes }) {

const { count, increment, decrement } = useCart();


    return (
        <>
           
            <div>
                {baryardDishes.map((item, index) => (
                    <div key={index} className='grid grid-cols-[4fr_2fr_1fr] px-5 py-3 border-b-2 border-b-slate-300'>
                        <div className='grid grid-cols-[1fr_8fr] md:grid-cols-[.4fr_8fr] gap-5 md:gap-2'>
                            <div className='pt-2'>{item.dish_Type == 2 ? <img className='w-5' src={veg} alt="" /> :
                                <img className='w-5' src={nonveg} alt="" />}</div>
                            <div>
                                <h1 className='font-medium text-xl'>{item.dish_name}</h1>
                                <h1 className='text-sm font-medium'>{item.dish_currency} {item.dish_price}</h1>
                                <p className='text-gray-500'>{item.dish_description}</p>
                                {/* button */}
                                {item.dish_Availability == true && <div className='flex gap-5 justify-around bg-green-600 w-fit cursor-pointer rounded-full h-7 items-center text-white'>
                                    <button onClick={() => decrement(item.dish_id)} className='pb-1 font-medium active:bg-green-700 cursor-pointer rounded-full px-3 '>-</button>
                                    <span className='font-medium flex justify-center'> {count[item.dish_id] || 0}</span>
                                    <button onClick={() => increment(item.dish_id)} className='pb-1 font-medium active:bg-green-700 cursor-pointer rounded-full px-3'>+</button>
                                </div>}

                                {item.addonCat.length > 0 && <p className="text-red-600 font-semibold py-2">Customization Available</p>}
                                {item.dish_Availability == false && <p className="text-red-600">Not Available</p>}
                            </div>

                        </div>
                        <div className='items-center pt-10'>
                            <h1>{item.dish_calories} Calories</h1>
                        </div>
                       <div className=''>
                            <img className='w-20 h-20 rounded' src={item.dish_image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Barnyard