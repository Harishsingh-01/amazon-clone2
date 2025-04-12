"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import amazonLogo from "../public/amazon-logo-2.webp"
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/supabase/hooks/redux';
import { getcart } from '@/redux/cartslice';
import { supabase } from '@/lib/supabase/products';




const itemlist = [
    "All",
    "Fresh",
    "MX Player",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Electronics",
    "Home & Kitchen",
    "Prime",
    "Customer Service",
    "Fashion"
]

const Header = () => {
    const [query, setquery] = useState<string>("");
    const [user,setuser]=useState<any>(null);
    const router = useRouter();

    const cart = useAppSelector(getcart);


    const searchhandler = () => {
        router.push(`/search/${query}`)
    }

    useEffect(()=>{
        const getuserdata = async() =>{
            const{data:{user}}= await supabase.auth.getUser();
            setuser(user);
        }
        getuserdata();
    },[])    

    return (
        <>
            <div className='bg-[#131921] text-white py-1'>
                <div className='flex items-center justify-between w-[95%] mx-auto'>
                    <Link href={'/'}>
                        <Image src={amazonLogo} alt={"logo"} width={150} height={150} />
                    </Link>
                    <div className='w-[90%] flex justify-center items-center'>
                        <input
                            value={query}
                            onChange={(e) => setquery(e.target.value)}
                            className='w-[80%] py-1.5 px-1.5 rounded-l-md text-black'
                            type="text"
                            placeholder='Search Amazon.in' />
                        <button onClick={searchhandler} className='bg-[#FEB069] p-2 rounded-r-md py-2.5'>
                            <FaSearch />
                        </button>
                    </div>

                    <div className='flex items-center justify-around w-[20%] '>
                        <div onClick={()=>{
                            router.push("/signin")
                        }} className='cursor-pointer'>
                            <h1 className='text-xs hover:underline'>{`${user ? user.identities[0].identity_data.full_name:"Signin"}`} </h1>
                            <h1 className='text-sm font-medium'>Accounts & lists</h1>
                        </div>
                        <div className='cursor-pointer'>
                            <h1 className='text-xs'>Returns</h1>
                            <h1 className='text-sm font-medium'>& Orders</h1>
                        </div>
                    </div>
                    <div>
                        <Link href={"/cart"} className='cursor-pointer ml-2'>
                            <p className='relative left-3 top-0'>{cart.length}</p>
                            <div className='flex items-center relative bottom-2.5'>
                                <div>
                                    <FaCartShopping size={"30px"} />
                                </div>
                                <h2 className='mt-2'>Cart</h2>
                            </div>
                        </Link>
                    </div>
            </div>
        </div >
            <div className='bg-[#232f3e] w-full text-white p-2 flex justify-between items-center'>
                <div>

                    {
                        itemlist.map((link, idx) => {
                            return (
                                <Link key={idx} href={`/${link}`} className='mx-1.5 hover:border border border-transparent hover:border-white p-1'>
                                    {link}
                                </Link>
                            )
                        })
                    }
                </div>

                <div>
                    <h2 onClick={async()=>{
                        const { error } = await supabase.auth.signOut();
                        if (error) {
                            console.error('Error signing out:', error.message);
                        }
                        router.push("/signin");
                    }} className='text-[#FEBD69] font-bold mr-2 cursor-pointer hover:underline'>Sign out!</h2>
                </div>

            </div>
        </>
    )


}

export default Header
