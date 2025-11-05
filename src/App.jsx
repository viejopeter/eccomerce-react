import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPages from './pages/CheckoutPages'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPages />} />
    </Routes>
    </>
  )
}

export default App
