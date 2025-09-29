import { useRoutes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/Header"
import routes from './Routes';
import productList from './productsDATA';
import Sidebar from './components/bagSidebar/Sidebar';
import { useState, ContextData, useMemo } from 'react';
import productsContext from './context/ProductsContext';

function App() {
  let router = useRoutes(routes)
  const [productsList, setProductsList] = useState(productList)
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowBagSidebar, setIsShowBagSidebar] = useState(false)
  const [messageToast, setMessageToast] = useState("")
  const [colorToast, setColorToast] = useState("")
  const [userBag, setUserBag] = useState([{
    id: 2,
    category: "coats",
    name: "Coat-w-2",
    price: 71,
    off: 10,
    img: "shopImage/coats/coat2.jpg",
    count: 1
  },])

  const allPrice = useMemo(() => {
    return userBag.reduce((sum, product) => sum + product.price * product.count, 0);
  }, [userBag]);

  return (
    <productsContext.Provider value={
      {
        productsList,
        isShowToast,
        setIsShowToast,
        isShowBagSidebar,
        setIsShowBagSidebar,
        userBag,
        setUserBag,
        allPrice,
        messageToast,
        setMessageToast,
        colorToast,
        setColorToast
      }
    }>
      <Header></Header>
      <Sidebar></Sidebar>
      {router}
    </productsContext.Provider>

  )
}

export default App;
