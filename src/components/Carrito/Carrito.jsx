import { useContext } from "react"

import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

import './Carrito.css'

export const Carrito = () => {
    const { carrito, borrarCarrito, borrarProducto, totalPrecio } = useContext(CartContext)

    if (carrito.lenght === 0) {
        return (
            <div className="carrito-vacio">
                <h2>El carrito esta vacio</h2>
                <Link className="button" to="/">
                    Volver al inicio
                </Link>
            </div>
        )
    }
    return (

        <div className="carrito" >
            <ul className="carrito-lista">
                {carrito.map((producto) => (
                    <li className="producto-item" key={producto.id}>
                        <img className="producto-imagen" src={producto.imagen} alt={producto.nombre} />
                        <p className="producto-nombre">{producto.nombre}</p>
                        <p className="producto-cantidad">Cantidad: {producto.cantidad}</p>
                        <p className="producto-precio">Precio c/u {producto.precio}</p>
                        <button className="eliminar-btn" onClick={() => borrarProducto(producto.id)}>Eliminar producto</button>
                    </li>
                ))
                }
            </ul>
            <div className="pagar-producto">
                <h3>Total a pagar : ${totalPrecio()}</h3>
                <button className="eliminar-btn" onClick={borrarCarrito}>Eliminar carrito</button>
            </div>
            <Link className="botones-carrito-continuar" to="/checkout">
                <p>Continuar con la compra</p>
            </Link>
        </div>

    )
}
