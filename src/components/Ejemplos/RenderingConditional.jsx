import { useState } from "react"
import { ReturnTemprano } from "./ReturnTemprano"

export const RenderingConditional = () => {

    const [datos, setDatos] = useState([])
  return (
    <>
    <ReturnTemprano datos={datos}/>
    </>
  )
}
