import React from 'react'
import Slider from './components/Slider'
import Offer from './components/Offer'
import './Home.css'
import { Image, Container } from 'react-bootstrap'
import WhyUs from './components/WhyUs'

export default function Home() {
  return (
    <Container>
      <div className="sec1-home">
        <Slider></Slider>
        <Offer></Offer>
      </div>

      <div className="sec2-home">
        <WhyUs></WhyUs>
      </div>
    </Container>


  )
}
