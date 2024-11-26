import { error } from "console";
import { useState } from "react"
import { supabase } from "../products";

export const usesupabase = () => {
    const [products, setproducts] = useState<any>([]);
    const [filterdata, setfilterdata] = useState<any>([]);
    const [singleproduct, setsingleproduct] = useState<any>([]);
    const [mensproduct, setmensproduct] = useState<any>([]);
    const [womensproduct, setwomensproduct] = useState<any>([]);


    const getdatafromsupabase = async () => {

        let { data, error } = await supabase.from('products').select("*");
        if (data) {
            setproducts(data);
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }


    const getfiltereddata = async (query: string) => {

        let { data, error } = await supabase.from('products').select("*").or(`title.ilike.%${query}%, description.ilike.%${query}% , category.ilike.%${query}%`);
        if (data) {
            setfilterdata(data);
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }


    const getsingleproduct = async (id: number) => {
        let { data, error } = await supabase.from('products').select('*').eq('id', id);
        if (data) {
            setsingleproduct(data);
        }
        if (error) {
            console.log(error);
        }
    }

    const getmensclothing = async () => {
        let { data, error } = await supabase.from('products').select('*').ilike('category', `men's clothing`)
        if (data) {
            setmensproduct(data);
        }
        if (error) {
            console.log(error);
        }
    }
    const getwomensclothing = async () => {
        let { data, error } = await supabase.from('products').select('*').ilike('category', `women's clothing`)
        if (data) {
            setwomensproduct(data);
        }
        if (error) {
            console.log(error);
        }
    }


    return { products, filterdata, getfiltereddata, getdatafromsupabase, singleproduct, getsingleproduct, mensproduct, getmensclothing, womensproduct, getwomensclothing }

}