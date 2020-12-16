import { Link } from "react-router-dom";
import './index.css'

function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img className="navBarStarLogo" src="/images/Beauty.png" alt="" width="30" height="24" />
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/agendamentos">Meus Agendamentos </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/fazer-agendamento">Agendar</a>
              </li>
              <li class="nav-item">
              </li>
            </ul>
            <imput className="btnLogin" type="button" onClick={event => window.location.href = '/login'} >Login</imput>
          </div>
        </div>
      </nav>
      <div className="backgroundImage" style={{
        backgroundImage: `url("http://localhost:3000/images/backgroundImage.jpg")`
      }}>
        <div className="st-image">
          <img className="mb-4" src='/images/Beauty.png' alt="" width="400" height="200" />
        </div>
        <div className="textoHome">
          <h5 className="titulo">Agendamento online de serviços de beleza.</h5  >
          <p className="corpo">Agende seu horário pelo computador de maneira
          fácil com um salão ou profissional autônomo
         para atendimento domiciliar.</p>
        </div>
      </div>
    </div>

  )
}

export default Home;