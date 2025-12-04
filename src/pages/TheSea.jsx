import React, { useState } from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import veg from '../../public/veglogo.jpg'
import nonveg from '../../public/nonveglogo.jpg'
import { useCart } from '../cartContext/CartContext'

function TheSea({ data, fromSea }) {

    const { count, increment, decrement } = useCart();
    return (
        <>
            <Header data={data} count={count} />
            <Slider />
            <div>
                {fromSea.map((item, index) => (
                    <div key={index} className='grid grid-cols-[4fr_2fr_1fr] px-5 py-2 border-b-2'>
                        <div className='grid grid-cols-[.4fr_8fr] items-center'>
                            <div className='pt-1'>{item.dish_Type == 2 ? <img className='w-5' src={veg} alt="" /> :
                                <img className='w-5' src={nonveg} alt="" />}</div>
                            <div>
                                <h1 className='font-medium text-xl'>{item.dish_name}</h1>
                                <h1 className='text-sm font-medium'>{item.dish_currency} {item.dish_price}</h1>
                                <p className='text-gray-500'>{item.dish_description}</p>
                                {/* button */}
                                {item.dish_Availability == true && <div className='flex gap-5 bg-green-600 w-fit px-4 rounded-full h-7 items-center text-white'>
                                    <button onClick={() => decrement(item.dish_id)} className='pb-1 font-medium'>-</button>
                                    <span className='font-medium flex justify-center'> {count[item.dish_id] || 0}</span>
                                    <button onClick={() => increment(item.dish_id)} className='pb-1 font-medium'>+</button>
                                </div>}
                                {item.addonCat.length > 0 && <p className="text-red-600 font-semibold py-2">Customization Available</p>}
                                {item.dish_Availability == false && <p className="text-red-600">Not Available</p>}
                            </div>

                        </div>
                        <div className='items-center pt-10'>
                            <h1>{item.dish_calories} Calories</h1>
                        </div>
                        <div className=' pt-5'>
                            <img className='w-20' src={item.dish_image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TheSea