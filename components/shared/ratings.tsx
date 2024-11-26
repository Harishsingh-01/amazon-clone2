import React from 'react'
import rating from "../../public/star-icon.png";
import Image from "next/image";

const ratings = ({ratings}:{ratings:any}) => {
    ratings=JSON.parse(ratings)
  return (
    <div className='flex items-center'>{
        Array(4).fill(1).map((dummyitem)=> <Image src={rating} height={20} width={20} alt="ratigng"/>)
        }
        <h1 className='text-[#001785] ml-2 font-medium'>{ratings.count } ratings</h1>
    </div>
  )
}

export default ratings
