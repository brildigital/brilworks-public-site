import React from 'react'
import Header from '../components/Header/Header'
import AutoSlidesFooter from '../components/Homepage/AutoSlidesFooter'
import Footer from '../components/Footer'
import Career from '../components/Career/Career'

const page = () => {
  return (
    <>
      <Header/>
      <Career/>
      <AutoSlidesFooter/>
      <Footer/>
    </>
  )
}

export default page
