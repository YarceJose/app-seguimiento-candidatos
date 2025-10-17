import './Encabezado.css'
import logo from '../assets/logo.svg'

function Encabezado() {
    let usuario = {
        nombre: "Felipe Perez",
        correo: "correo@correo.com",
        rol: "admin",
        contrasena: "contraseñaSegura"
    }
    let iniciales = usuario.nombre.split(" ").map((letra)=> letra[0]).join("")
    console.log(iniciales)
    return (
        <header className="header-container">
            <img className="header-foto" src={logo} alt="Logo" />
            <nav className="header-menu">
                <a className="header-menu-enlace" href="">Inicio</a>
                <a className="header-menu-enlace" href="">Candidatos</a>
                <a className="header-menu-enlace" href="">Ofertas</a>
                <a className="header-menu-enlace" href="">Seguimiento</a>
            </nav>
            <span className="header-iniciales">{iniciales}</span>
            <p className="header-nombre">{usuario.nombre}</p>
            <button className="header-cerrar">Cerrar Sesión</button>
        </header>
    )
}
export default Encabezado