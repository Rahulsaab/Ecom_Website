import React from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
const PageNavigation = ({title}) => {
  return (
    <>
    <div className="flex mt-4 bg-slate-200 fixed w-full z-10  gap-1 max-h-full text-lg md:text-2xl font-medium p-2 " ><span className='pt-0.5 text-gray-500'><IoHome /></span><Link to="/" ><span className='text-blue-600'>Home</span> &gt; {title}</Link></div>
    
    </>
  )
}

export default PageNavigation
