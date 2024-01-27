import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Form } from "./Form"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import db from "../../db/db"

export const CheckOut = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        emailRepetido: ""
    })

    const [idOrden, setIdOrden] = useState(null)
    const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext)

    const guardarDatosInput = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value })
    }

    const enviarOrden = (e) => {
        e.preventDefault()
        if (datosForm.email === datosForm.emailRepetido) {
            const orden = {
                comprador: { ...datosForm },
                productos: { ...carrito },
                fecha: new Date(),
                total: totalPrecio(),
            }
            subirOrden(orden)
        } else {
            alert("los email no son iguales")
        }
    }

    const subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden).then((respuesta) => {
            setIdOrden(respuesta.id)

            borrarCarrito()
        })
    }

    return (
        <div className="checkout">
            {idOrden ? (
                <div className="orden">
                    <h2>Orden Generada correctamente!!</h2>
                    <p>N° de orden: {idOrden} </p>
                    <Link className="boton-orden" to="/">Ver mas productos</Link>
                </div>
            ) : (
                <Form
                    datosForm={datosForm}
                    guardarDatosInput={guardarDatosInput}
                    enviarOrder={enviarOrden}
                />
            )}
        </div>
    );
}
