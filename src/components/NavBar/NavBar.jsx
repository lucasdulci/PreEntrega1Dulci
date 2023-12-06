import { CartWidget } from "../CartWidget/CartWidget"
import './Navbar.css'

export const NavBar = () => {
    return (
     
        <div className="barra ">
            <nav className="navegacion">
                <div className="logo">
                    <a href="/">
                        <img src="./img/logo.png" alt="" />
                    </a>
                </div>
                <div className="nav-links">
                <ul className="no-padding">
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li className="">
                        <a href="#">Contacto</a> 
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="# ">Tienda</a>
                    </li>
                </ul>
                </div>
                <CartWidget/>
            </nav>
        </div>
        
    )
}
