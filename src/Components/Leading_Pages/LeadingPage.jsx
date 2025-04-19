import React, { useEffect, useRef } from 'react'
import Home from './Home/Home'
import Slice from './ChooseSlice/Slice'
import TopSales from './TopSales/TopSales'
import AllTopSale from './AllTopSale/AllTopSale'
import Text from './Text/Text'
import Philosophy from './Philosophy/Philosophy'
import Journal from './Journal/Journal'
import Get from './Get/Get'

import Lenis from 'lenis'

function LeadingPage() {
  const ref = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      target: ref.current,
      autoRaf: true,
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });
  }, []);

  return (
    <div ref={ref}>
      <Home />
      <Slice />
      <TopSales />
      <AllTopSale />
      {/* <Text />  */}
      <Philosophy />
      <Journal/>
      <Get />
    </div>
  )
}

export default LeadingPage