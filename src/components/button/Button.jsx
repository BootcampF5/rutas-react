import './button.css'
import PropTypes from "prop-types";

const Button = ({title}) => {
    
    const persona = {
        nombre: "Galina",
        apellido:"Aleksandrova"
    }

    console.log(persona.apellido)
    const {nombre, apellido} = persona
    console.log(apellido)
    console.log(nombre)
    return (
        <div>
            <button className='button'>{title}</button>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Button;