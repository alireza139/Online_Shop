import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css'

export default function Slider() {
    return (
        <Carousel className='slider my-5'>
            <Carousel.Item className='slider-item'>
                <img className='slider-image' src='banners/homeBaneer2.webp' text="Foured slide" />
            </Carousel.Item>
            <Carousel.Item className='slider-item'>
                <img className='slider-image' src='banners/banner1.webp' text="First slide" />
            </Carousel.Item>
            <Carousel.Item className='slider-item'>
                <img className='slider-image' src='banners/banner2.webp' text="Second slide" />
            </Carousel.Item>
            <Carousel.Item className='slider-item'>
                <img className='slider-image' src='banners/banner3.webp' text="Third slide" />
            </Carousel.Item>
        </Carousel>
    )
}
