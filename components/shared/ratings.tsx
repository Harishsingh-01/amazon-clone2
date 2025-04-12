import React from 'react'
import rating from "../../public/star-icon.png";
import Image from "next/image";

const Ratings = ({ratings}:{ratings:any}) => {
    const parsedRatings = JSON.parse(ratings);
  return (
    <div className='flex items-center'>
        {Array(4).fill(1).map((_, index) => (
            <Image key={index} src={rating} height={20} width={20} alt="rating"/>
        ))}
        <h1 className='text-[#001785] ml-2 font-medium'>{parsedRatings.count} ratings</h1>
    </div>
  )
}

export default Ratings
