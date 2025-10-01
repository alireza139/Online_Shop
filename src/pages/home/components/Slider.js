import React from "react";
import Slider from "react-slick";
import "./Slider.css"; // استایل سفارشی‌سازی

export default function FadeSlider() {
    const photos = [
        "banners/repeat photos/rp1.png",
        "banners/repeat photos/rp2.png",
        "banners/repeat photos/rp3.png",
        "banners/repeat photos/rp4.png",
        "banners/repeat photos/rp5.png",
        "banners/repeat photos/rp6.png",
        "banners/repeat photos/rp7.png",
        "banners/repeat photos/rp8.png",
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true
    };

    return (
        <div className="py-3 mt-5" style={{background: "#FFCC02" , borderRadius: "1rem"}}>
            <div className="custom-slider">
                <Slider {...settings} className="slider">
                    {photos.map((photo, index) => (
                        <div key={index}>
                            <img
                                src={photo}
                                alt={`slide-${index}`}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
