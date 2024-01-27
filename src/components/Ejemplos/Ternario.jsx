import { useEffect, useState } from 'react'

export const Ternario = () => {

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        

        setTimeout(() =>{
            setCargando(false)
        },5000)
    },[])
  return (
    <div>
        <h2>Practicando operador ternario</h2>
        {
            cargando ? <h3>Cargando...</h3> : <h3>Cargando con exito!!!</h3>
        }
    </div>
  )
}
