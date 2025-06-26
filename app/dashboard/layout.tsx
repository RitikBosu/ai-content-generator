import React from 'react'
import Sidenav from './_component/Sidenav';
import Header from './_component/Header';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div className='md:w-64 hidden md:block fixed'>
            <Sidenav/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default layout