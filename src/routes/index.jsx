import { Routes,Route, Navigate} from "react-router-dom"
import { lazy,Suspense } from "react"
import Loading from "../components/loader/Loader"

import MenuList from "@pages/MenuList/menuList"
import Receipt from "@pages/receipt/receipt"
import Checkout from "@pages/Checkout/checkout"
import NotFound from "@pages/notFound/NotFound"

// Lazy Loading this pages make the app slow.

// const MenuList = lazy(() => import("@pages/MenuList/menuList"))
// const Receipt = lazy(() => import("@pages/receipt/receipt"))
// const Checkout = lazy(() => import("@pages/Checkout/checkout"))

export const RoutesList = () => {
    return (
        // <Suspense>
            <Routes>
                <Route exact path="/:branchId/:tableNumber" element={<MenuList/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/receipt" element={<Receipt/>} />
                {/* <Route path="/load" element={<Loading/>} /> */}
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<NotFound />} />
            </Routes>
        // </Suspense>
    )
}
