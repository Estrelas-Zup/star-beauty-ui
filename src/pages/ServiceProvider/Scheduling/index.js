import './styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../../core/components/Navbar'

const headers = {
  Authorization: `Bearer ${localStorage.getItem("authData")}`
}

function ListSchedule() {
  const [listSchedule, setListSchedule] = useState([])

  useEffect(() => {
    axios("http://localhost:3000/agendamentos/meus-agendamentos", { headers })
      .then(response => {
        console.log(response.data)
        setListSchedule(response.data)
      })
      .catch(error => {
        console.log(error.response.data.mensagem)
      })
  }, [])



  const renderElements = () => {
    return listSchedule.map(schedule => {
      return (
        <div className="cardSchedule">
          <div key={schedule.idAgendamento} className="internalSizeCard">
            <p>Serviço: {schedule.servico.nomeServico}<br />
              Método de pagamento: {schedule.tipoPagamento}<br />
              Data e hora do agendamento:<br />
              {schedule.dataHora}<br />
              {schedule.dataHoraFim}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="backgroundImage"
      style={{
        backgroundImage: `url("http://localhost:3000/images/backgroundImage.jpg")`
      }}>
      <Navbar />
      <div className="container">
        <h3 className="titleMySchedules">MEUS AGENDAMENTOS</h3>
        <div className="allSchedules">
          {renderElements()}
        </div>
      </div>
    </div>
  );
}

export default ListSchedule;