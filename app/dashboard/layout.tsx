"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalUsage,setTotalusage] = useState<Number>(0);
  const [userSubcription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();

  return (

    <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>

    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
    </div>
    </UpdateCreditUsageContext.Provider>
  )
}

export default layout