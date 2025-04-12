"use client";
import { usesupabase } from '@/lib/supabase/hooks/usesupabase';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Searchresult from '@/components/searchresult';

const SearchPage = () => {
    const { query } = useParams();
    const { filterdata, getfiltereddata } = usesupabase();

    useEffect(() => {
        if (query) {
            getfiltereddata(query.toString());
        }
    }, [query, getfiltereddata]);

    return (
        <div>
            <Searchresult filterdata={filterdata} />
        </div>
    );
};

export default SearchPage;
