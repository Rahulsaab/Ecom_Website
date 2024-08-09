import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
const PageNavigation = ({title}) => {
  return (
    <>
    <div className="flex gap-1 max-h-fit bg-slate-200 text-xl font-medium p-2 pl-5" ><span className='pt-0.5 text-gray-500'><IoHome /></span><Link to="/" ><span className='text-blue-600'>Home</span> &gt; {title}</Link></div>
    
    </>
  )
}

export default PageNavigation
