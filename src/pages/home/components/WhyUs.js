import React from 'react'
import './WhyUs.css'
import { GiOrangeSlice } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";






export default function WhyUs() {
  return (
    <div>
      <div className="seperator mt-5">
        <hr />
        <h2>Why Nareng Stor?</h2>
        <hr />
      </div>
      <div className='whyUs-box '>
        <div className="whyUs-card whyUs-card1">
          <FaHandshake className='whyUs-icon'></FaHandshake>
          <p>Quality assurance</p>
        </div>
        <div className="whyUs-card whyUs-card2">
          <TbTruckDelivery className='whyUs-icon'></TbTruckDelivery>
          <p>Immediate delivery</p>
        </div>
        <div className="orange-icon-card">
          <GiOrangeSlice></GiOrangeSlice>
        </div>
        <div className="whyUs-card whyUs-card1">
          <FaHandshake className='whyUs-icon'></FaHandshake>
          <p>Quality assurance</p>
        </div>
        <div className="whyUs-card whyUs-card2">
          <TbTruckDelivery className='whyUs-icon'></TbTruckDelivery>
          <p>Immediate delivery</p>
        </div>
      </div>

    </div>
  )
}
