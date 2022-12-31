

import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import '../../Style/header.css';

const navLinks = [
 {
  path: '/home',
  display: 'Home'
 },
 {
  path: '/about',
  display: 'About'
 },
 {
  path: '/cars',
  display: 'Cars'
 },
 {
  path: '/blogs',
  display: 'Blog'
 },
 {
  path: '/contact',
  display: 'Contact'
 },
 
]

const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");


  return <header className='header'>

    {/* ==============Header Top============ */}

    <div className='header-top'>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6'>
          <div className='header_top_left'>
            <span>Need Help?</span>
            <span className='header_top_help'>
            <i class="ri-phone-fill"></i> +012-2548-3658
            </span>

          </div>
          </Col>
          <Col lg='6' md='6' sm='6'>
            <div className='header_top_right d-flex align-items-center justify-content-end gap-3'>
            <Link to='#' className='d-flex align-items-center gap-1'><i class="ri-login-circle-line"></i>Login</Link>
            <Link to='#' className='d-flex align-items-center gap-1'><i class="ri-login-circle-line"></i>Register</Link>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
       {/* ==============Header Middle============ */}
       <div className='header__middle'>
        <Container>
          <Row>
            <Col lg='4' md='3' sm='4'>
              <div className='logo'>
                <h1><Link to='/home' className='d-flex align-items-center gap-3'>
                <i class="ri-car-line"></i>
                <span>Car Hire <br /> Service </span>
                
                </Link></h1>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className='header__location d-flex align-items-center gap-2'>
                <span><i class="ri-earth-line"></i></span>
                <div className="header__location-content">
                  <h4>Bangladesh</h4>
                  <h6>Chattogram, Bangladesh</h6>
                </div>
              </div>
            
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className='header__location d-flex align-items-center gap-2'>
                <span><i class="ri-time-line"></i></span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            
            </Col>

            <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
              <button className='header__btn btn'>
                <Link to='/contact'>
                <i class="ri-phone-fill"></i> Request a call
                </Link>

              </button>

            </Col>
          </Row>
        </Container>

       </div>

        {/* ==============Main Navigation============ */}

        <div className='main__navbar'>
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {
                    navLinks.map((item, index) => (
                      <NavLink to={item.path} className = {navClass => navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>{item.display}</NavLink>
                    ))
                  }
                </div>
              </div>
              <div className="nav__right">
                <div className="search__box">
                  <input type="text" placeholder='search' />
                  <span>
                    <i class="ri-search-line"></i>
                    </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
  </header>
}

export default Header;