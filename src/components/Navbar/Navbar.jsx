import '../../assets/bootstrap.min.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light-logo" target="_blank" data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt='Cacao.Cocoa' height="120px" width="150px"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Redes</a></li>
            
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
