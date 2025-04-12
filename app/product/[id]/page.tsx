"use client";
import React, { useEffect } from 'react';
import Singleproduct from "@/components/Singleproduct";
import { useParams } from 'next/navigation';
import { usesupabase } from '@/lib/supabase/hooks/usesupabase';

const ProductPage = () => {
    const { id } = useParams();
    const { singleproduct, getsingleproduct } = usesupabase();

    useEffect(() => {
        if (id) {
            getsingleproduct(Number(id));
        }
    }, [id, getsingleproduct]);

    return (
        <div>
            <Singleproduct singleproduct={singleproduct} />
        </div>
    );
};

export default ProductPage;