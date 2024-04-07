import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ShopPage from "./pages/ShopPage"

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
        </Routes>
    )
}

export default Pages