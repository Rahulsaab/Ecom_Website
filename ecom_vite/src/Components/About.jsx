import React, { useContext } from 'react'
import HeroSection from '../Subcomponents/HeroSection'
import Footer from "./Footer"
import { AppContext } from '../Context/ProductContex'
import FeaturesProducts from '../Subcomponents/FeaturesProducts'
const About = () => {

  const {myname} = useContext(AppContext)

  const data={name:"TECH ECOMMERCE"}
  return (
    <>
    
    <section style={{marginTop:"5rem"}}>
    {/* <p>{myname}</p> */}
    <HeroSection mydata={data}/>
    </section>
    <FeaturesProducts/>
    <Footer/>
    </>
  )
}

export default About
