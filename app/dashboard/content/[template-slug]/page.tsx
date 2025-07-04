// "use client"
// import React, { useState } from 'react'
// import FormSection from '../_components/FormSection'
// import OutputSection from '../_components/OutputSection'
// import Templates from '@/app/(data)/Templates'
// import { TEMPLATE } from '../../_components/TemplateListSection'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft } from 'lucide-react'
// import Link from 'next/link'
// import { response } from '@/utils/AiModel'

// interface PROPS{
//   params:{
//     'template-slug':string
//   }
// }
// function CreateNewContent(props:PROPS) {

//   const selectedTemplate:TEMPLATE | undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

//   const [loading,setLoading] =useState(false);
//   const GenerateAIContent=async(formData:any)=>{
//     setLoading(true);
//     const SelectedPrompt=selectedTemplate?.aiPrompt;

//     const FinalAIPrompt=JSON.stringify(formData)+ ", "+SelectedPrompt;

//     const result=await response.sendMessage(FinalAIPrompt);

//     console.log(result.response.text());
//     setLoading(false);
//   }

//   return (
//     <div className='p-5'>
//       <Link href={"/dashboard"}>
//       <Button><ArrowLeft/>Back</Button>
//       </Link>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
//         {/* FormSection */}
//           <FormSection selectedTemplate={selectedTemplate}
//           userFormInput={(v:any)=>GenerateAIContent(v)}
//           loading={loading} />
//         {/* OutputSection */}
//         <div className='col-span-2'>
//           <OutputSection/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreateNewContent

"use client";
import React, { useState } from 'react';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Templates from '@/app/(data)/Templates';
import { TEMPLATE } from '../../_components/TemplateListSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { generateContent } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params['template-slug']
  );

  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>(''); 
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user} = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;

    // Construct the prompt (adjust this based on your formData structure if needed)
    const finalAIPrompt = `${JSON.stringify(formData)}, ${selectedPrompt}`;


    try {
      const result = await generateContent(finalAIPrompt); 
      setOutput(result);
      console.log(result);
      setAiOutput(result);
      await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug, result)

    } catch (error) {
      console.error('Error generating content:', error);
    }

    setLoading(false);
  };

  //in video
  const SaveInDb=async(formData:any, slug:any, aiResp:string)=>{
    const result=await db.insert(AIOutput).values({
      FormData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt: new Date().toISOString()

    });
    console.log(result)
  }

//my logic
// const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
//   try {
//     await db.insert(AIOutput).values({
//       formData: formData,
//       templateSlug: slug,
//       aiResponse: aiResp,
//       createdBy: user?.primaryEmailAddress?.emailAddress,
//       createdAt: new Date().toISOString(),
//     });
//   } catch (err) {
//     console.error("Error saving to DB", err);
//   }
// };

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
        />
        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput}/> {/* Pass the output to display */}
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;