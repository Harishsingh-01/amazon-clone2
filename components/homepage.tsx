"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { usesupabase } from '@/lib/supabase/hooks/usesupabase';
import Categorywiseproduct from './shared/categorywiseproduct';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Homepage = () => {
  const { mensproduct, getmensclothing, womensproduct, getwomensclothing } = usesupabase();

  useEffect(() => {
    getmensclothing();
    getwomensclothing();
  }, [getmensclothing, getwomensclothing]);

  return (
    <div>
      <Image 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
        }} 
        src={"https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_P3A_GW_PC_EventHero_NTA_2x._CB545056695_.jpg"} 
        height={10000} 
        width={10000} 
        alt={"banner"} 
      />
      <div className='w-[80%] mx-auto grid grid-cols-4 gap-2 relative -top-60'>
        {mensproduct.map((products: Product) => (
          <Link key={products.id} href={`/product/${products.id}`}>
            <Categorywiseproduct products={products} />
          </Link>
        ))}

        {womensproduct.map((products: Product) => (
          <Link key={products.id} href={`/product/${products.id}`}>
            <Categorywiseproduct products={products} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Homepage
