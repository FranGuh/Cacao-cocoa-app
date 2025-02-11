import '../../assets/bootstrap.min.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-light" target="_blank" data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt='Cacao.Cocoa' height="45px"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
