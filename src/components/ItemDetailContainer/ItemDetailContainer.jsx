import { useEffect, useState } from "react"
import obtenerProductos from "../Utils/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(()=>{
    obtenerProductos
      .then((respuesta)=> {
        const productoEncontrado = respuesta.find( (prod)=> prod.id === id)
        setProducto(productoEncontrado)
      })
      .catch((err)=>{
        console.log(err)
      })

  }, [])

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} />
    </div>
  )
}

