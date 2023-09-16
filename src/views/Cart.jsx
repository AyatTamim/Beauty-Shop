import React from 'react'
import SiteNav from '../layout/SiteNav'
import Footer from "./Footer"
import BackTotop from './BackTotop';
import CallBack from './CallBack';

export default function Cart() {
  return (
    <div>
      <SiteNav />
      <h2>Cart</h2>
      <CallBack/>
      
      <BackTotop />
      <Footer />
    </div>
  )
}
