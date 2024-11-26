import React from 'react'
import Productcard from './productcard'

const searchresult = ({filterdata}:{filterdata:any}) => {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='mt-10 '>
            <div>
            <h1 className='font-bold text-2xl'>Result {filterdata.length} </h1>
            <p>Price and other details may vary based on product size and colour.</p>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                {
                    filterdata?.map((products:any)=>{
                        return (
                            <div key={products.id}>
                                <Productcard products={products}/>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    </div>
  )
}

export default searchresult
