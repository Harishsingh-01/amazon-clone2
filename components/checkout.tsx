"use client";
import React from 'react';
import Deliveryaddress from './deliveryaddress';
import Ordersummary from './ordersummary';
import Image from 'next/image';
import Amazonlogo from "../public/amazon-logo.png";


const checkout = () => {
    return (
        <div className=' absolute top-0 w-full p-12 mx-auto bg-white'>
            <div className='flex items-center border-b border-gray-300 pb-5 justify-between'>
                <div>
                    <Image src={Amazonlogo} width={130} height={130} alt='amazon-logo' />
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Checkout</h1>
                </div>
            </div>
            <div className='flex  justify-between w-[90%] mx-auto'>
                <Deliveryaddress />
                <Ordersummary />

            </div>

        </div>
    )
}

export default checkout