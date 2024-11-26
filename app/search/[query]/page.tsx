"use client";
import { usesupabase } from '@/lib/supabase/hooks/usesupabase';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Searchresult from '@/components/searchresult';

const page = () => {
    const {query}=useParams();
    const { filterdata, getfiltereddata}=usesupabase();

    useEffect(()=>{
        getfiltereddata(query.toString());
    },[]);
    console.log(filterdata);
  return (
    <div>
        <Searchresult filterdata={filterdata}/>
    </div>
  )
}

export default page
