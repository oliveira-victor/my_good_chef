import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ShopPage from "./pages/ShopPage"
import Cart from "./pages/Cart"

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/shop/:id" element={<ShopPage />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Pages