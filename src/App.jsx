import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPages from './pages/checkout/CheckoutPages'
import OrdersPage from './pages/OrdersPage'
import Tracking from './pages/Tracking'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPages />} />
      <Route path="/orders" element={<OrdersPage />}></Route>
      <Route path='/tracking' element={<Tracking />}></Route>
    </Routes>
    </>
  )
}

export default App
