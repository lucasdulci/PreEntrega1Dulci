import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import { Carrito } from "./components/Carrito/Carrito"
import { CheckOut } from "./components/Checkout/CheckOut"

export const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
