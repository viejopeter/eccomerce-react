import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPages from './pages/checkout/CheckoutPages'
import OrdersPage from './pages/OrdersPage'
import Tracking from './pages/Tracking'
import NotFound from './pages/NotFound'
import { useEffect,useState } from 'react'
import axios from 'axios'

function App() {

  const [cart, setCars] = useState([])

  useEffect(() => {
    const fetchDataCar = async () => {

      try {
        const response = await axios.get("/api/cart-items?expand=product")
        setCars(response.data)
      } catch (e) {
        console.error("Error fetching cart data:", e)
      }
    }
    fetchDataCar()
  },[])

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart}/>} />
        <Route path="/checkout" element={<CheckoutPages cart={cart}/>} />
        <Route path="/orders" element={<OrdersPage cart={cart}/>} />
        <Route path='/tracking' element={<Tracking cart={cart}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
