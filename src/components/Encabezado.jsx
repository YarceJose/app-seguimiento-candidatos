function Encabezado() {
    return (
        <header className="header-container">
            <img className="header-foto" src="" alt="Logo" />
            <nav className="header-menu">
                <a className="header-menu-enlace" href="">Inicio</a>
                <a className="header-menu-enlace" href="">Candidatos</a>
                <a className="header-menu-enlace" href="">Ofertas</a>
                <a className="header-menu-enlace" href="">Seguimiento</a>
            </nav>
            <span className="header-iniciales">Iniciales</span>
            <p className="header-nombre">Nombre</p>
            <button className="header-cerrar">Cerrar Sesión</button>
        </header>
    )
}
export default Encabezado