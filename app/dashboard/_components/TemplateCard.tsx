import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'dashboard/content/' + item?.slug} className="h-full">
      <div className='p-5 shadow-md rounded-md border bg-white flex flex-col justify-between gap-3 cursor-pointer hover:scale-105 transition-all h-full'>
        <div>
          <Image src={item.icon} alt='icon' width={50} height={50} />
          <h2 className='font-medium text-lg mt-2'>{item.name}</h2>
          <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default TemplateCard
