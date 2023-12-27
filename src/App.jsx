import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:categoria" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>  
    </BrowserRouter>
  )
}
