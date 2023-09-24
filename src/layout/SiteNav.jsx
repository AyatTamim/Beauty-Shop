import React from 'react'
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import checks from "../checks.png"
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function SiteNav() {
  const { t } = useTranslation();
  document.body.dir = i18n.dir();
  let changeLAnguage = () => {
    i18n.language === "en" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
    localStorage.setItem("language", i18n.language)
  }
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language"))
  }, [])
  return (
    <>
      <Navbar expand="md" >
        <Container className='pb-5'>
          <Navbar.Brand href="/" className='BeautyShop' >Beauty Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-link" to="/">{t('Home')}</NavLink>
              <NavLink className="nav-link " to="/about">{t("About")}</NavLink>
              <NavLink className="nav-link " to="/cart">{t("Cart")}</NavLink>
              <NavLink className="nav-link " to="/products">{t("Product")}</NavLink>
              <NavLink className="nav-link " to="/wishlist">{<FontAwesomeIcon icon={faHeartCircleCheck} />}</NavLink>
              <FontAwesomeIcon className="m-1 pt-1 iconeHover" size="xl" icon={faGlobe} onClick={changeLAnguage} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <img
        src={checks}
        width="100%"
      /> */}
    </>

  )
}
