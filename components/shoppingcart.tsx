"use client"
import React from 'react'
import Image from 'next/image'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { decrementquantity, incrementquantity, removefromthecart } from '@/redux/cartslice';
import Subtotal from './shared/subtotal';


const shoppingcart = ({ cart, totalprice }: { cart: any, totalprice: number }) => {
    const dispatch = useAppDispatch();
    return (
        <div className='w-[70%]'>
            <div className='flex justify-between items-center border-b border-gray-300 py-5'>
                <h1 className='font-bold text-2xl'>shopping cart</h1>
                <h1 className='font-medium'>Price</h1>
            </div>
            {
                cart.map((products: any) => {
                    return (
                        <div className='py-2 flex justify-between border-b border-gray-200'>
                            <div className='flex'>
                                <div>
                                    <Image src={products.image} width={150} height={150} alt={"image"} />
                                </div>
                                <div className='ml-4'>
                                    <h1 className='font-bold'>{products.title}</h1>
                                    <p className='text-[#007600] font-bold my-2 text-xs'>In stock</p>
                                    <h1 onClick={() => {
                                        dispatch(removefromthecart(products.id))
                                    }} className='font-bold w-fit text-red-600 cursor-pointer'>Remove</h1>
                                    <div className='flex text-xl my-4 font-medium justify-between items-center w-fit bg-gray-200 rounded-md px-5 py-1'>
                                        <div onClick={() => {
                                            products.quantity > 1 && dispatch(decrementquantity(products))
                                        }} className='cursor-pointer mr-4'>-</div>
                                        <div>{products.quantity}</div>
                                        <div onClick={() => {
                                            dispatch(incrementquantity(products))
                                        }} className='cursor-pointer ml-4'>+</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold texr-xl'>{`$${products.price}`}</h1>
                                <p className='text-xs py-1'>M.R.P: <span className='line-through'>3,995.00</span></p>
                            </div>
                        </div>

                    )
                })
            }
            <div className='my-4'>
                <Subtotal length={cart.length} totalprice={totalprice} />
            </div>
        </div>
    )
}

export default shoppingcart