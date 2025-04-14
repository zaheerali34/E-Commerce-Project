import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Leading_Pages/Header/Header'
import Footer from './Components/Leading_Pages/Footer/Footer'

function App() {
  return (
    <div className='py-6 font-[fontTwo]'>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

export default App