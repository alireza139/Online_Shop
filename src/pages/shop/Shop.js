import React, { useContext, useState, useMemo } from 'react'
import ProductCard from '../../components/productCart/ProductCard'
import Toast from '../../components/toast/Toast'
import './Shop.css'
import productsContext from '../../context/ProductsContext'

export default function Shop() {
  const { productsList } = useContext(productsContext)

  let categories = ["all", ...new Set(productsList.map(product => product.category))]

  const [chosenCategory, setChosenCategory] = useState("all")
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 5

  // 1️⃣ اول فیلتر
  const filteredProducts = useMemo(() => {
    return chosenCategory === "all"
      ? productsList
      : productsList.filter(product => product.category === chosenCategory)
  }, [chosenCategory, productsList])

  // 2️⃣ بعد pagination
  const chosenPageItems = useMemo(() => {
    let endIndex = currentPage * pageSize
    let firstIndex = endIndex - pageSize
    return filteredProducts.slice(firstIndex, endIndex)
  }, [filteredProducts, currentPage])

  // تعداد کل صفحات
  const pageCount = Math.ceil(filteredProducts.length / pageSize)
  const pagesNumbers = Array.from(Array(pageCount).keys())

  const filterBtnHandler = (category) => {
    setChosenCategory(category)
    setCurrentPage(1)   // 👈 برگرد به صفحه اول
  }

  return (
    <>
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <>
          {/* دکمه‌های فیلتر */}
          <div className='filtered d-flex justify-content-center mt-5'>
            {categories.map(category =>
              <button
                key={category}
                onClick={() => filterBtnHandler(category)}
                className={`btn-categories-style ${chosenCategory === category ? "activeModeFiltered" : ""}`}
              >
                {category}
              </button>
            )}
          </div>

          {/* محصولات */}
          <div className='shop-box my-5'>
            {chosenPageItems.map(product => <ProductCard key={product.id} {...product} />)}
          </div>
          <Toast />

          {/* pagination */}
          <nav>
            <ul className="pagination d-flex justify-content-center">
              <li
                className={`page-item me-3 ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                style={{ cursor: "pointer" }}
              >
                <span className="page-link">Previous</span>
              </li>

              {pagesNumbers.map(pageNumber => (
                <li
                  key={pageNumber + 1}
                  className={pageNumber + 1 === currentPage ? 'page-item active' : 'page-item'}
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentPage(pageNumber + 1)}
                >
                  <span className="page-link">{pageNumber + 1}</span>
                </li>
              ))}

              <li
                className={`page-item ms-3 ${currentPage === pageCount ? "disabled" : ""}`}
                onClick={() => currentPage < pageCount && setCurrentPage(currentPage + 1)}
                style={{ cursor: "pointer" }}
              >
                <span className="page-link">Next</span>
              </li>
            </ul>
          </nav>

          <div className="text-center mt-2">
            Page {currentPage} of {pageCount}
          </div>
        </>
      )}
    </>
  )
}
