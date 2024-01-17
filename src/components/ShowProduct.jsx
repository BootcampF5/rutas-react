import axios from "axios";
import { useEffect, useState } from "react";

const ShowProduct = () => {
    const url = "http://localhost:3000/product";
    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts();
    })

    const getProducts = async () => {
        const response = await axios.get(url)
        const data = response.data;
        //console.log(data)
        setProducts(data);
    }
    return (
        <>
        {
            products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <img src={product.image} alt="" />
                </div>
            ))
        }
        </>
    )
}

export default ShowProduct