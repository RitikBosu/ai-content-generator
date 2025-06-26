"use client"
import React, {useState} from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

export default function page() {
  const [userSearchInput,setUserSearchInput] =useState<string>()
  return (
    <div>
      {/* {SearchSection} */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>

      {/* {TemplateListSection} */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}
