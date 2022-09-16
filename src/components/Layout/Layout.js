import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Routes  from '../../routes/Routers';
import Carts from '../UI/cart/Carts';
import { useSelector } from "react-redux";
import LogOutbtn from '../../pages/LogOutbtn';
const Layout = ({handelLogout}) => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  
  return (
    <div>
        <Header />
        <LogOutbtn handelLogout ={handelLogout} />
        {showCart && <Carts />}
        <div>
            <Routes />
        </div>
        <Footer />
    </div>
  )
}

export default Layout