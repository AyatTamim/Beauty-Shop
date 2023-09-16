import React from 'react'
import SiteNav from '../layout/SiteNav'
import Footer from "./Footer"
import BackTotop from './BackTotop';
import Memo from './Memo';
export default function About() {
  return (
    <div>
      <SiteNav/>
      <h2>About</h2>
      <Memo />
      <BackTotop/>
      <Footer/>
    </div>
  )
}
