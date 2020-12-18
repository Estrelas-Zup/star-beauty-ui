import './index.css'
import Navbar from '../../core/components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
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