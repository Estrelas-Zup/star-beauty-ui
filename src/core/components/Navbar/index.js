import { Link, NavLink } from "react-router-dom";
import './styles.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navBarSystem">
        <div className="container-fluid">
          <img className="navBarStarLogo" src="/images/Beauty.png" alt="" width="30" height="24" />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/meus-agendamentos">Meus Agendamentos </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/fazer-agendamento">Agendar</NavLink>
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <Link className="btnLogin" to="/login">Login</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;