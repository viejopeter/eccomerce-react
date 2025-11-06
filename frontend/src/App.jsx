import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPages from './pages/checkout/CheckoutPages'
import OrdersPage from './pages/OrdersPage'
import Tracking from './pages/Tracking'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPages />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path='/tracking' element={<Tracking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
