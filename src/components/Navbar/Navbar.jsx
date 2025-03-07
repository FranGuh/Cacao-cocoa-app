import logo from '../../assets/logo.png';

const Navbar = ({ setSeccionActiva, seccionActiva }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light-logo navbar-fixed">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setSeccionActiva("inicio")}>
          <img src={logo} alt="Cacao.Cocoa" height="120px" width="150px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className={`nav-link ${seccionActiva === "inicio" ? "active-link" : ""}`} href="#" onClick={() => setSeccionActiva("inicio")}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${seccionActiva === "productos" ? "active-link" : ""}`} href="#" onClick={() => setSeccionActiva("productos")}>Products</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${seccionActiva === "newsletter" ? "active-link" : ""}`} href="#" onClick={() => setSeccionActiva("newsletter")}>Newsletter</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${seccionActiva === "motivarme" ? "active-link" : ""}`} href="#" onClick={() => setSeccionActiva("motivarme")}>Motivarme</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
