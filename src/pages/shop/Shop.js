import React, { useContext, useState } from 'react'
import ProductCard from '../../components/productCart/ProductCard'
import Toast from '../../components/toast/Toast'
import './Shop.css'
import productsContext from '../../context/ProductsContext'

export default function Shop() {
  const contextData = useContext(productsContext)

  let categories = ["all", ...new Set(contextData.productsList.map(product => product.category))]

  const [chosenCategory, setChosenCategory] = useState("all")

  const filterBtnHandler = (category) => {
    setChosenCategory(category)
  }

  return (
    <>
      <div className='filtered d-flex justify-content-center mt-5'>
        {
          categories.map(category =>
            <button
              key={category}
              onClick={() => filterBtnHandler(category)}
              className={`btn-categories-style ${chosenCategory === category ? "activeModeFiltered" : ""}`}
            >
              {category}
            </button>
          )
        }
      </div>

      <div className='shop-box my-5'>
        {
          chosenCategory === "all"
            ? contextData.productsList.map(product => <ProductCard key={product.id} {...product} />)
            : contextData.productsList
              .filter(product => product.category === chosenCategory)
              .map(product => <ProductCard key={product.id} {...product} />)
        }
      </div>
      <Toast></Toast>
    </>
  )
}
