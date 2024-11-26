"use client";
import React from 'react'
import Shoppingcart from './shoppingcart'
import Proceedtobuy from './proceedtobuy'
import {useAppSelector } from '@/lib/supabase/hooks/redux';
import { getcart } from '@/redux/cartslice';

const cart = () => {
    const cart = useAppSelector(getcart);

    let totalprice=0;
    cart.forEach((item:any)=>{
        totalprice+= item.price*item.quantity;
    });
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex w-full justify-between '>
                <Shoppingcart cart={cart} totalprice={totalprice} />
                <Proceedtobuy length={cart.length} totalprice={totalprice} />
            </div>

        </div>
    )
}

export default cart