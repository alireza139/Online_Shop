import React from 'react'
import Slider from './components/Slider'
import Offer from './components/Offer'
import { Image, Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      {/* <Image src="banners/homeBaneer1.jpg" fluid /> */}
      <Container>
        <Slider></Slider>
        <Offer></Offer>
      </Container>
    </div>
  )
}
