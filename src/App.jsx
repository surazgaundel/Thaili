import { useState } from 'react'
import Hero from './pages/Hero'
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import SingleProductPage from './pages/SingleProduct';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Footer from './components/Footer';
function App() {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Hero/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/products/:id' element={<SingleProductPage/>}/>
      <Route exact path='/*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
