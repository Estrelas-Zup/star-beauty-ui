import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/agendamentos">Meus Agendamentos</Link>
          </li>
          <li>
            <Link to="/fazer-agendamento">Fazer agendamento</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;