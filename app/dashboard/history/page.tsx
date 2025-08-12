// // import React from 'react'
// // import { TEMPLATE } from '../_components/TemplateListSection'
// // import Templates from '@/app/(data)/Templates'
// // import { currentUser } from '@clerk/nextjs/server'
// // import { db } from '@/utils/db';
// // import { AIOutput } from '@/utils/schema';
// // import { desc, eq} from 'drizzle-orm';
// // import { Button } from '@/components/ui/button';
// // import  Image  from 'next/image';
// // import CopyButton from './CopyButton';
// // export interface HISTORY{
// //       id:Number,
// //       formData:string,
// //       aiResponse:string,
// //       templateSlug:string,
// //       createdBy:string,
// //       createdAt:string
// // }
// // async function History() {

// //   const user =await currentUser();

// //   {/*@ts-ignore */}
// //   const HistoryList:HISTORY[]=await db.select().from(AIOutput)
// //   .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
// //   .orderBy(desc(AIOutput.id));


// //   const GetTemplateName=(slug:string)=>{

// //     const template:TEMPLATE|any=Templates?.find((item)=> item.slug==slug)
// //     return template;
// //   }
// //   return (
// //     <div className='m-5 p-5 border rounded-lg bg-white'>
// //       <h2 className='font-bold text-3xl'>History</h2>
// //       <p className='text-gray-500'> Search your History</p>
// //       <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
// //       <h2 className='col-span-2'>TEMPLATE</h2>
// //       <h2 className='col-span-2'>AI RESP</h2>
// //       <h2>DATE</h2>
// //       <h2>WORDS</h2>
// //       <h2>COPY</h2>
// //     </div>
// //     {HistoryList.map((item: HISTORY, index: number) => {
// //   const template = GetTemplateName(item.templateSlug);
// //   return (
// //     <React.Fragment key={index}>
// //       <div className="grid grid-cols-7 my-5 py-3 px-3 items-center">
// //         {/* TEMPLATE */}
// //         <div className="col-span-2 flex items-center gap-2">
// //           {template?.icon && (
// //             <Image
// //               src={template.icon}
// //               width={30}
// //               height={30}
// //               alt="icon"
// //               className="rounded"
// //             />
// //           )}
// //           <span>{template?.name ?? 'Unknown'}</span>
// //         </div>

// //         {/* AI RESPONSE */}
// //         <div className="col-span-2 line-clamp-3">
// //           {item.aiResponse}
// //         </div>

// //         {/* DATE */}
// //         <div className="truncate">
// //           {new Date(item.createdAt).toLocaleDateString("en-IN", {
// //             day: '2-digit',
// //             month: 'short',
// //             year: 'numeric',
// //           })}
// //         </div>

// //         {/* WORD COUNT */}
// //         <div>
// //           <h2>{item?.aiResponse.length}</h2>
// //         </div>

// //         {/* COPY BUTTON */}
// //         <div>
// //           <CopyButton text={item.aiResponse} />
// //         </div>
// //       </div>
// //       <hr />
// //     </React.Fragment>
// //   );
// // })}

// //     </div>
// //   )
// // }
// // export default History

// import React from 'react'
// import { TEMPLATE } from '../_components/TemplateListSection'
// import Templates from '@/app/(data)/Templates'
// import { currentUser } from '@clerk/nextjs/server'
// import { db } from '@/utils/db';
// import { AIOutput } from '@/utils/schema';
// import { desc, eq} from 'drizzle-orm';
// import { Button } from '@/components/ui/button';
// import  Image  from 'next/image';
// import CopyButton from './CopyButton';
// export interface HISTORY{
//       id:Number,
//       formData:string,
//       aiResponse:string,
//       templateSlug:string,
//       createdBy:string,
//       createdAt:string
// }
// async function History() {

//   const user =await currentUser();

//   {/*@ts-ignore */}
//   const HistoryList:HISTORY[]=await db.select().from(AIOutput)
//   .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
//   .orderBy(desc(AIOutput.id));


//   const GetTemplateName=(slug:string)=>{

//     const template:TEMPLATE|any=Templates?.find((item)=> item.slug==slug)
//     return template;
//   }
//   return (
//     <div className='m-5 p-5 border rounded-lg bg-white'>
//       <h2 className='font-bold text-3xl'>History</h2>
//       <p className='text-gray-500'> Search your History</p>
//       <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
//       <h2 className='col-span-2'>TEMPLATE</h2>
//       <h2 className='col-span-2'>AI RESP</h2>
//       <h2>DATE</h2>
//       <h2>WORDS</h2>
//       <h2>COPY</h2>
//     </div>
//     {HistoryList.map((item:HISTORY, index:number)=>(
//       <>
//       <div className='grid grid-cols-7 my-5 py-3 px-3'>
//         <h2 className='col-span-2 flex gap-2 items-center'>
//           <Image src={GetTemplateName(item?.templateSlug).icon} width={50} height={50} alt='icon'></Image>
//           {GetTemplateName(item.templateSlug)?.name}
//         </h2>
//         <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse}</h2>
//             {new Date(item.createdAt).toLocaleDateString("en-IN", {
//              day: '2-digit',
//              month: 'short',
//              year: 'numeric',
//            })}
//         <h2>{item?.aiResponse.length}</h2>
//         <h2>
//           <CopyButton text={item.aiResponse} />
        
        
//         </h2>
//       </div>
//       <hr/>
//       </>
//     ))}

//     </div>
//   )
// }
// export default History


import React from 'react'
import { TEMPLATE } from '../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { desc, eq} from 'drizzle-orm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import CopyButton from './CopyButton';

export interface HISTORY{
  id: Number,
  formData: string,
  aiResponse: string,
  templateSlug: string,
  createdBy: string,
  createdAt: string
}

async function History() {
  const user = await currentUser();

  // @ts-ignore
  const HistoryList: HISTORY[] = await db.select().from(AIOutput)
    .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find((item) => item.slug == slug)
    return template;
  }

  return (
    <div className='m-5 p-5 border rounded-lg bg-white'>
      <h2 className='font-bold text-3xl'>History</h2>
      <p className='text-gray-500'>Search your History</p>
      <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
        <h2 className='col-span-2'>TEMPLATE</h2>
        <h2 className='col-span-2'>AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      
      {HistoryList.map((item: HISTORY, index: number) => {
        const template = GetTemplateName(item?.templateSlug);
        return (
          <React.Fragment key={index}>
            <div className='grid grid-cols-7 my-5 py-3 px-3 items-center'>
              {/* TEMPLATE */}
              <div className='col-span-2 flex gap-2 items-center'>
                {template?.icon && (
                  <Image 
                    src={template.icon} 
                    width={30} 
                    height={30} 
                    alt='icon'
                    className='rounded'
                  />
                )}
                <span>{template?.name ?? 'Unknown Template'}</span>
              </div>
              
              {/* AI RESPONSE */}
              <div className='col-span-2 line-clamp-3'>
                {item?.aiResponse}
              </div>
              
              {/* DATE */}
              <div>
                {new Date(item.createdAt).toLocaleDateString("en-IN", {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
              
              {/* WORD COUNT */}
              <div>
                {item?.aiResponse?.length || 0}
              </div>
              
              {/* COPY BUTTON */}
              <div>
                <CopyButton text={item.aiResponse} />
              </div>
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  )
}

export default History