// import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'
import Home from './pages/home/Home'
import SingleProduct from './pages/singleProduct/SingleProduct';
import Error404 from './pages/erroe404/Error404';
import About from './pages/about/About';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';


let routes = [
    { path: '/', element: < Home ></Home > },
    { path: '/shop', element: < Shop ></Shop > },
    { path: `/shop/:productID`, element: < SingleProduct ></SingleProduct > },
    { path: '/contact', element: < Contact></Contact> },
    { path: '/about', element: < About></About> },


    // باید آخرین روت باشه
    { path: '*', element: <Error404 /> },
]

export default routes