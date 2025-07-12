"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { eq } from 'drizzle-orm';

function UsageTrack() {

    const{user}=useUser();
    const[totalUsage, setTotalUsage]=useState<number>(0);

    useEffect(()=>{
        user&&GetData();
    }, [user])

    const GetData=async()=>{
        {/*@ts-ignore*/}
        const result:HISTORY[]=await db.select().from(AIOutput)
        .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
        GetTotalUsage(result)
    }


    const GetTotalUsage=(result:HISTORY[])=>{
        let total: number = 0;
        result.forEach(element =>{
            total =total+Number(element.aiResponse?.length)
        });

        setTotalUsage(total)
        console.log(total);
    }

  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
            <h2 className='font-medium'>Credit</h2>
            <div className='h-2 bg-[#9981f9] w-full mt-3'>
                <div className='h-2 bg-white rounded'
                style={{
                    width:(totalUsage/10000)*100+"%"
                    }}
                ></div>
            </div>
            <h2 className='text-sm my-2'>{totalUsage}/10,000 Credit used</h2>
            <div>
                <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
            </div>
        </div>
    </div>
  )
}

export default UsageTrack