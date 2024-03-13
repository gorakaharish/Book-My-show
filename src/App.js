import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Recom from './components/Recom/Recom'
import Card2 from './components/Card2/Card2'
import Movies from './components/Movies/Movies'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Recom />
      <Card2 />
      <Movies />
      <Footer />
    </div>
  )
}

export default App
