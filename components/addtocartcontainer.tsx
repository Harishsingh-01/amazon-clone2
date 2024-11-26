import React from 'react'
import prime from "../public/prime-logo.png"
import Image from 'next/image';
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addtocart } from '@/redux/cartslice';
import { Provider } from 'react-redux';
import { useRouter } from 'next/navigation';

const addtocartcontainer = ({products}:{products:any}) => {
    const dispatch= useAppDispatch();
    const router=useRouter();
    return (
        <div className='border border-gray-300 rounded-md h-fit text-sm'>
            <div className='mx-5 mt-2'>
                <Image src={prime} width={40} height={40} alt={"prime"} />
            </div>
            <div className='p-4'>
                <h1><span className='text-[#147C8F]'>FREE delivery </span>Wednesday, 23 October. <span className='text-[#147C8F]'>Details </span></h1>
                <h1 className='mt-4 '>Or fastest delivery Sunday, 20 October. Order within 3 hrs 27 mins.<span className='text-[#147C8F]'>Details</span> </h1>
                <p className='text-[#147C8F] my-2'>Delivering to Jaipur 302001 - Update location</p>
                <button onClick={()=>{
                    dispatch(addtocart(products));
                    router.push("/cart")
                }} className='bg-[#FFd814] w-full rounded-full py-2 mt-2 '>Add to Cart</button>
                <button className='bg-[#FFA41C] w-full rounded-full py-2 mt-2 '>Buy Now</button>
            </div>


        </div>
    )
}

export default addtocartcontainer