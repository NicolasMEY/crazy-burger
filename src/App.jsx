import "./App.css"
import { Routes,  Route } from "react-router-dom"
import OrderPage from "./assets/components/pages/order/OrderPage"
import LoginPage from "./assets/components/pages/login/LoginPage"
import ErrorPage from "./assets/components/pages/error/ErrorPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
