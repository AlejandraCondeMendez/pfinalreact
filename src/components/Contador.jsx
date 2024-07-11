/* eslint-disable react/prop-types */
import { createContext } from "react"
import { useState } from "react"

export const ContadorContxt = createContext()

const ContadorProvider =({children})=>{
    const [contador, setContador] = useState(0)

    const aumenta =()=>{
        setContador(contador+1)
    }
    const disminuye =()=>{
        setContador(contador-1)
    }

    return(
        <>
        {/*los valores se toman del estados y de la función. Estos valores (contador, aumenta) se van a usar 
        en los componentes donde los necesitemos*/}
        <ContadorContxt.Provider value={{contador,aumenta, disminuye}}> 
        {children}
        </ContadorContxt.Provider>
        </>
    )
}
export default ContadorProvider