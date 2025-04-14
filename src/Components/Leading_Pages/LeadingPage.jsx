import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import Slice from './ChooseSlice/Slice'
import TopSales from './TopSales/TopSales'
import AllTopSale from './AllTopSale/AllTopSale'
import Text from './Text/Text'
import Philosophy from './Philosophy/Philosophy'
import Journal from './Journal/Journal'
import Get from './Get/Get'
import Footer from './Footer/Footer'

function LeadingPage() {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <Slice />
      <TopSales />
      <AllTopSale />
      {/* <Text />  */}
      <Philosophy />
      <Journal/>
      <Get />
      {/* <Footer/> */}
    </>
  )
}

export default LeadingPage