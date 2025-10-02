import React, { useState } from 'react'
import './Offer.css'
import productList from '../../../productsDATA'
import ProductCard from '../../../components/productCart/ProductCard'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Offer() {
  const [allProducts] = useState(productList)

  // تنظیمات اسلایدر
  const settings = {
    dots: true,              // نمایش نقطه‌های پایین برای ناوبری بین اسلایدها
    infinite: true,          // اسکرول بی‌نهایت (بعد از آخرین اسلاید، اولی دوباره نمایش داده می‌شود)
    speed: 500,              // سرعت انیمیشن انتقال بین اسلایدها (میلی‌ثانیه)
    slidesToShow: 4,         // تعداد کارت‌هایی که در دسکتاپ همزمان نمایش داده می‌شوند
    slidesToScroll: 1,       // تعداد اسلایدی که با هر حرکت اسکرول می‌شود
    autoplay: true,          // فعال کردن پخش خودکار اسلایدها
    autoplaySpeed: 4000,     // فاصله‌ی زمانی بین هر اسلاید در پخش خودکار (میلی‌ثانیه، اینجا ۴ ثانیه)
    centerMode: false,        // فعال کردن حالت مرکزی: اسلاید وسط بزرگ‌تر و متمرکز دیده می‌شود
    centerPadding: "60px",    // فاصله اطراف اسلاید مرکزی (می‌تواند px یا درصد باشد)
    responsive: [            // تنظیمات ریسپانسیو برای اندازه‌های مختلف صفحه
      {
        breakpoint: 992, // تبلت (عرض کمتر از 992px)
        settings: {
          slidesToShow: 2   // نمایش ۲ اسلاید همزمان
        }
      },
      {
        breakpoint: 576, // موبایل (عرض کمتر از 576px)
        settings: {
          slidesToShow: 1   // نمایش ۱ اسلاید همزمان
        }
      }
    ]
  }

  return (
    <div className='offer-box mt-5 pb-5 px-4'>
      {/* هدینگ */}
      <div className="offer-head d-flex justify-content-evenly align-items-center py-4">
        <h4 className='offer-head-text fs-4'>Special Sell</h4>
      </div>

      {/* اسلایدر محصولات */}
      <Slider {...settings}>
        {allProducts
          .filter(product => product.off !== 0)
          .map(product => (
            <div key={product.id}>
              <ProductCard {...product} />
            </div>
          ))}
      </Slider>
    </div>
  )
}
