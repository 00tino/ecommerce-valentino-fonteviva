import './NavBar.css';
import Logo from '../Assets/img/Logo.png';
import Carrito from '../Assets/img/carrito.png';

function NavBar() {
    return (
        <>
            <div className = "NavBar-div">
                <button>
                    <img src = {Logo} id = "NavBar-div__button__logo" />
                </button>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <button>
                    <img src = {Carrito} className = "NavBar-div__button__carrito" />
                </button>
            </div>
        </>
    )
}

export default NavBar
