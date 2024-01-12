import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react"

const Layout = () => {

    //desestructura del useSate()
    //console.log(useState())
    const [contador, setContador] = useState(0) 
    const handleContador = () => {
        setContador(contador + 1)
    } 

    const [contadorNegativo, setContadorNegativo] = useState(0) 

    const handleContadorNegativo = () => {
        setContadorNegativo(contadorNegativo - 1)
    } 

    useEffect ( () => {
        console.log("se va a renderizar SIEMPRE")
    })

    useEffect ( () => {
        console.log("se va a renderizar Una sola vez")
    }, [])

    useEffect ( () => {
        console.log("se va a renderizar una vez y cuando se cambie mi dependecia")
    }, [contadorNegativo])

    return (
        <div>
            <Navbar/>
            <main><Outlet/></main>
            <footer>Footer</footer>
            <button onClick={handleContador}>Contador : {contador}</button>
            <button onClick={handleContadorNegativo}>ContadorNegativo : {contadorNegativo}</button>
        </div>
    )
}

export default Layout;