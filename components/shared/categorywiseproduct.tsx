import React from 'react';
import Image from 'next/image';
import Ratings from './ratings';
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addtocart } from '@/redux/cartslice';
import { useRouter } from 'next/navigation';

const categorywiseproduct = ({products}:{products:any}) => {
    const dispatch = useAppDispatch();
    const router=useRouter();
    return (
        <div className='border border-gray-300 p-2 bg-white'>
            <h1 className='font-bold'>{products.category} </h1>
            <div className='{mt-2 h-[250px] overflow-hidden flex items-center justify-center'>
                <Image src={products.image} className='p-4' height={150} width={200} alt={products.title} />
            </div>
            <div>
                <h1>{products.title}</h1>
                <Ratings ratings={products.rating} />
            </div>
            <div className='my-2'>
                <button onClick={()=>{

                  dispatch(addtocart(products))
                  router.push("/cart");}
                 } className='w-full my-2 rounded-md bg-[#FFD814] '>Add to Cart</button>
            </div>
        </div>

    )
}

export default categorywiseproduct