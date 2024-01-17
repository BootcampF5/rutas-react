import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const url = "http://localhost:3000/product";

    const navigate = useNavigate();

    const [nombre, setNombre ] = useState('');
    const [descripcion, setDescripcion ] = useState('');
    const [imagen, setImagen ] = useState('');

    const storeProduct = async (event) => {
        
        console.log(event)
        await axios.post(url, 
            {
                name: nombre,
                description: descripcion,
                image: imagen
            }
        )
        navigate("/")
    }
    
    return (
        <>
            <div>CreateProduct</div>
            <form onSubmit={storeProduct}>
                <div>
                    <label>Nombre</label>
                    <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
                </div>
                <div>
                    <label>Descripción</label>
                    <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)}/>
                </div>
                <div>
                    <label>Imagen</label>
                    <input type="text" value={imagen} onChange={(event) => setImagen(event.target.value)}/>
                </div>
                <button type="submit">Crear Product</button>
            </form>
        </>
    )
}

export default CreateProduct