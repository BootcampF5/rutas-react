
import { Link } from "react-router-dom"
import ShowProduct from "../components/ShowProduct"

const Home = () => {
    
    return (
        <>
            <div>Home</div>
            <button><Link to={"/create"}>Create Product</Link></button>
            <ShowProduct/>
        </>
    )
}

export default Home