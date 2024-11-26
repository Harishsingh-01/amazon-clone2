import React from 'react';
import Subtotal from './shared/subtotal';
import { useRouter } from 'next/navigation';

const proceedtobuy = ({ length, totalprice }: { length: number, totalprice: number }) => {
    const router = useRouter();
    return (
        <div className='w-[25%] h-fit border border-gray-300 ml-4'>
            <div className='p-4'>
                <p> <span className='text-[#007600] font-medium'>Your order is eligible for free delivery.</span> Choose <span className='text-[#147C8F]'>free delivery</span> options at checkout.</p>
                <div className='border-t border-b border-gray-200 mt-6'>
                    <Subtotal length={length} totalprice={totalprice} />
                    <button onClick={() => {
                        router.push("/checkout")
                    }} className='bg-[#FFD814] w-full py-1 rounded-md my-4 hover:text-[#007600] '>Proceed to Buy</button>
                </div>
            </div>

        </div>
    )
}

export default proceedtobuy