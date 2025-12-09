import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/home/HomePage'
import CheckoutPages from './pages/checkout/CheckoutPages'
import OrdersPage from './pages/orders/OrdersPage'
import Tracking from './pages/Tracking'
import NotFoundPage from './pages/NotFoundPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [cart, setCars] = useState([])

  const loadCart = async () => {

    try {
      const response = await axios.get("/api/cart-items?expand=product")
      setCars(response.data)
    } catch (e) {
      console.error("Error fetching cart data:", e)
    }

  }

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="/checkout" element={<CheckoutPages cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
        <Route path='/tracking/:orderId/:productId' element={<Tracking cart={cart} />} />
        <Route path="*" element={<NotFoundPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
