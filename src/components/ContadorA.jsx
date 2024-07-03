import { useState } from "react"
import Boton from "./Boton"

const ContadorA=()=>{
    const [contador, setContador] = useState(0)

    const aumentar=()=>{
        setContador(contador+1)
    }

    const disminuir=()=>{
        setContador(contador-1)
    }

    return(
        <>
        <Boton/>
        
        </>
    )
}

export default ContadorA