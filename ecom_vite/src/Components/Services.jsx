import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";

const Services = () => {
  return (
    <>
    <section className=''>
        <div className="service text-gray-600">
            <div className="s-box"><div className='service-icons'><TbTruckDelivery /></div><div>Super Fast and Free Delivery</div></div>
            <div className="s-box1">
                <div className="sbox1-inside mb-5 gap-2"><div className='service-icons'><MdOutlineSecurity /></div>Non-Contact Shopping</div>
                <div className="sbox1-inside  gap-2"><div className='service-icons'><RiRefund2Line /></div>Money Back Gurenteed</div>
            </div>
            <div className="s-box"><div className='service-icons'><MdOutlinePayment /></div><div>Super Secure Payment System</div></div>
        </div>
    </section>
    </>
  )
}

export default Services
