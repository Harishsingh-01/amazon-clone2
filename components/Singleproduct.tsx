import React from 'react';
import Image from 'next/image';
import Addtocartcontainer from '@/components/addtocartcontainer';
import Ratings from './shared/ratings';
const Singleproduct = ({ singleproduct }: { singleproduct: any }) => {
  return (

    <div className='w-[90%] mx-auto my-5'>
      <div className='flex justify-between'>
          {
            singleproduct.map((products: any) => {
              return (
                <div className='flex'>

                  <div className='flex mt-5'>
                    <div>
                      <Image className='mix-blend-multiply p-4' src={products.image} width={250} height={250} alt={products.title} />

                    </div>
                    <div className='mx-6 w-[70%]'>
                      <h1 className='font-bold text-lg'>{products.title}</h1>
                      <h1>{products.description} </h1>
                      {/* <Ratings ratings={products.ratings}  /> */}
                      <h1 className='font-bold text-2xl'>{`$${products.price}`} </h1>
                      <div>
                        <h1 className='font-bold  '>About this item</h1>
                        <li>Change Your Cleaning Experience - SOFTSPUN isn’t one ordinary microfiber It’s real Premium Quality! The fiber used is an excellent absorber & just cleans better than other micro fibre products, cotton or chamois. </li>
                        <li>Change Your Cleaning Experience - SOFTSPUN isn’t one ordinary microfiber It’s real Premium Quality! The fiber used is an excellent absorber & just cleans better than other micro fibre products, cotton or chamois. </li>
                        <li>Change Your Cleaning Experience - SOFTSPUN isn’t one ordinary microfiber It’s real Premium Quality! The fiber used is an excellent absorber & just cleans better than other micro fibre products, cotton or chamois. </li>

                      </div>
                    </div>
                  </div>

                  <Addtocartcontainer products={products} />
                </div>

              )
            })

          }
        

      </div>

    </div>
  )
}
export default Singleproduct