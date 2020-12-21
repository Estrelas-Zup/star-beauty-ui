import './index.css'
import Navbar from '../../core/components/Navbar'
import backgroundImage from "../../images/backgroundImage.jpg"

function Home() {
  return (
    <div>
      <div className="backgroundImage">
      <img src={backgroundImage} alt="Logo" />
        < Navbar />
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