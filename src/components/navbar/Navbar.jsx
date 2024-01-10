import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar