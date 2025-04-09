"use client";
import React, { useEffect } from 'react';
import Singleproduct from "@/components/Singleproduct";
import { useParams } from 'next/navigation';
import { usesupabase } from '@/lib/supabase/hooks/usesupabase';

const ProductPage = () => {
    const { id } = useParams();
    const { singleproduct, getsingleproduct } = usesupabase();
    useEffect(() => {
        getsingleproduct(Number(id));

    }, [])
    return (
        <div>
            <Singleproduct singleproduct={singleproduct}/>
            <h1>{id}</h1>
        </div>
    )
}

export default ProductPage