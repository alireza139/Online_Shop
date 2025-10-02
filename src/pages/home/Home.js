import React from 'react'
import Slider from './components/Slider'
import Offer from './components/Offer'
import './Home.css'
import { Image, Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      
        <Slider></Slider>
        <Offer></Offer>
    </Container>


  )
}
