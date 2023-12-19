import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
// import ItemsTop from './components/ItemsTop'
// import Banner from './components/Banner'
// import LoginDialogue from './components/LoginDialogue'
import DataProvider from './context/DataProvider'
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import DetailView from './components/DetailPage/DetailView'
import CartComponent from './components/Cart/CartComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/cart' element={<CartComponent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>

  )
}

export default App
