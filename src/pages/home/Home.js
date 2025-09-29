import React from 'react'
import Slider from './components/Slider'
import Offer from './components/Offer'
import { Image, Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Container>
        <Slider></Slider>
        <Offer></Offer>
        <Image src="banners/homeBaneer1.jpg" fluid className="my-5" />
      </Container>
    </div>
  )
}
