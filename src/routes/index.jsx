import MenuList from "@pages/MenuList/menuList"
import Receipt from "@pages/receipt/receipt"
import Checkout from "@pages/Checkout/checkout"
import { Routes,Route} from "react-router-dom"
import { Suspense } from "react"

export const RoutesList = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<MenuList/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/receipt" element={<Receipt/>} />
            </Routes>
        </Suspense>
    )
}
