import React from 'react'
import Home from './Home/Home'
import Slice from './ChooseSlice/Slice'
import TopSales from './TopSales/TopSales'
import AllTopSale from './AllTopSale/AllTopSale'
import Text from './Text/Text'
import Philosophy from './Philosophy/Philosophy'
import Journal from './Journal/Journal'
import Get from './Get/Get'

function LeadingPage() {
  return (
    <>
      <Home />
      <Slice />
      <TopSales />
      <AllTopSale />
      {/* <Text />  */}
      <Philosophy />
      <Journal/>
      <Get />
    </>
  )
}

export default LeadingPage