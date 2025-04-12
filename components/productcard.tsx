import React from 'react';
import Image from "next/image";
import Ratings from "./shared/ratings";
import { useRouter } from 'next/navigation';

const ProductCard = ({ products }: { products: any }) => {
    const router = useRouter();
    return (
        <div>
            <div>
                <div className='cursor-pointer' onClick={() => {
                    router.push(`/product/${products.id}`)
                }}>
                    <div className='flex items-center justify-center rounded-md bg-gray-100 h-[320px] overflow-hidden '>
                        <Image className='mix-blend-multiply p-2' src={products.image} alt={products.title} width={200} height={400} />
                    </div>
                    <h1 className='font-bold'>{products.title}</h1>
                    <p>{`${products.description.substring(0, 50)}....`}</p>
                    <Ratings ratings={products.rating}/>
                    <p className='font-bold text-2xl'>{`$${products.price}`} </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
