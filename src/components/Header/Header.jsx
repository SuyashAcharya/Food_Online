import React,{useRef , useEffect , useState} from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";


import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [show, handelShow] = useState(false);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };


  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll",transitionNavbar);
    return() => window.removeEventListener("scroll",transitionNavbar)
  }, []);

 
  return (
    <header className={`header ${show && "header__shrink"}`}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Suyash Treat</h5>
          </div>
          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} >
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink 
                onClick={toggleMenu}
                to={item.path} key={index}
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>

            {/* <span className="logout-btn" onClick={handelLogout}>
            <i className="ri-logout-box-line"></i>
            </span> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
