"use client"
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

// Dynamically import Editor with SSR disabled
const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <div className="h-[600px] flex items-center justify-center bg-gray-50">Loading editor...</div>
});

interface props {
  aiOutput:string;
}

function OutputSection({aiOutput}:props) {
//check for errors here
//const editorRef = useRef<Editor>(null);

  const editorRef:any = useRef(null);

  useEffect(()=>{
    if (editorRef.current && aiOutput) {
      const editorInstance=editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your result</h2>
        <Button className='flex gap-2'
        onClick={()=>navigator.clipboard.writeText(aiOutput)}
        ><Copy className='w-4 h-4'/>Copy</Button>
      </div>
        <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
        />
      </div>
  )
}

export default OutputSection