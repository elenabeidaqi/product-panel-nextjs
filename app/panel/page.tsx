"use client"
import React, { useLayoutEffect } from 'react'
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import PanelPage from '@/pages/panel/PanelPage';
import NavBar from '@/components/panel/NavBar';

const page = () => {
    const router = useRouter()
    useLayoutEffect(() =>{
        if(!Cookies.get("token")){
            router.push("/auth")
        }
    } , [])

    
  return (
    <div>
      <NavBar/>
      <PanelPage/>
    </div>
  )
}

export default page
