import React from 'react'
import Image from 'next/image';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getcart } from '@/redux/cartslice';
import Ordersummary from "./ordersummary";

const deliveryaddress = () => {
    const cart = useAppSelector(getcart);

    return (
        <div className='w-[50%] mx-20 '>
            <div className='mx-auto border-b border-gray-400 py-2 '>
                <div className='flex w-[50%] justify-between '>
                    <h1 className='font-bold text-lg'>Delivery Address</h1>
                    <p className='text-sm p-1'>
                        <span className='font-bold text-l underline'>Harish Singh</span><br />
                        Ading,281501 <br />
                        Goverdhan Mathura<br />
                        Uttar Pradesh<br />
                        Add Delivery Instructions <br />
                    </p>
                </div>
            </div>
            <div className='mx-auto border-b border-gray-400 py-2'>
                <div className='flex w-[50%] justify-between '>
                    <h1 className='font-bold text-lg'>2. Items And Delivery</h1>
                </div>
                {
                    cart.map((products: any) => {
                        return (
                            <div className='my-4'>
                                <div className='flex '>
                                    <Image src={products.image} width={130} height={130} alt={products.title} />
                                    <div className='ml-4'>
                                        <h1 className='font-bold'>{products.title}</h1>
                                        <p className='text-2xl font-bold py-2'>{`$${products.price}`}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default deliveryaddress