import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import axios from "axios"
import { supabase } from '@/lib/supabase/products';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getcart } from '@/redux/cartslice';


const stripepromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const ordersummary = () => {
    const cart = useAppSelector(getcart)

    const Createstripsession = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        const stripe = await stripepromise;

        const checkoutsession = await axios.post("/api/checkout-sessions", {
            items: cart,
            email: user?.email
        })

        //redirect to checkout session
        const result=await stripe?.redirectToCheckout({
            sessionId:checkoutsession.data.id,
        }) 

        if (result?.error){
            console.log(result.error.message)
        }



    }
    return (
        <div className='border border-gray-300 p-4 m-5 h-fit'>
            <div>
                <h1 className='font-bold my-3'>Order Summary</h1>
                <div className='text-xs'>
                    <div className='flex items-center justify-between'>
                        <p>Items</p>
                        <p>7809</p>
                    </div> <div className='flex items-center justify-between'>
                        <p>Delivery</p>
                        <p>40</p>
                    </div> <div className='flex items-center justify-between'>
                        <p>Total</p>
                        <p>7809</p>
                    </div> <div className='flex items-center justify-between'>
                        <p>Promotion Applied:</p>
                        <p>-40</p>
                    </div>
                    <div className='flex text-xl font-bold text-[#B12704] py-2 border-t border-b border-gray-300 my-1'>
                        <h1>Order total: </h1>
                        <h1>{344}</h1>

                    </div>
                </div>
                <button onClick={Createstripsession} className='bg-[#FFD814] w-full rounded-md my-3 px-4 py-1'>Place your Order Now </button>
            </div>
        </div>
    )
}

export default ordersummary