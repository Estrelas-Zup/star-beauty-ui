import { useEffect } from 'react';
import Navbar from '../../core/components/Navbar'
import axios from 'axios'
import Select from 'react-select'
import { useState } from 'react';
import DateTimePicker from '../../core/components/Scheduler/Scheduler.js'


const headers = {
  Authorization: `Bearer ${localStorage.getItem("authData")}`
}

function MakeSchedule() {

  const [services, setServices] = useState([])
  const [saloons, setSaloons] = useState([])
  const [employees, setEmployees] = useState([])
  const [autonomous, setAutonomous] = useState([])
  const [payments, setPayments] = useState([])
  const [formState, setFormState] = useState({})

  const handleChange = (name, value) => {
    setFormState(state => ({
      ...state,
      [name]: value
    }))
  }

  const handleChangeSaloon = (saloon) => {
    setEmployees(saloon?.funcionarios)
    setPayments(saloon?.formasPagamento)
  }

  useEffect(() => {
    axios("http://localhost:3000/servicos", { headers })
      .then(response => {
        setServices(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios("http://localhost:3000/saloes", { headers })
      .then(response => {
        setSaloons(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios("http://localhost:3000/autonomos", { headers })
      .then(response => {
        setAutonomous(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const onSubmit = () => {
    console.log({
      formState
    })
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>AGENDAMENTO</h3>
        <div className="container allSelects">
          <Select
            className="selectServico"
            isClearable
            onChange={value => handleChange("idServico", value?.idServico)}
            placeholder="Serviços"
            options={services}
            getOptionValue={option => option.idServico}
            getOptionLabel={option => option.nomeServico}
          />
          <Select
            className="selectSalao"
            isClearable
            onChange={saloon => handleChangeSaloon(saloon)}
            placeholder="Salões"
            options={saloons}
            getOptionValue={option => option.idUsuario}
            getOptionLabel={option => option.nomeFantasia}
          />
          <Select
            className="selectFuncionarios"
            isClearable
            onChange={value => handleChange("idFuncionario", value?.idFuncionario)}
            placeholder="Funcioarios"
            options={employees}
            getOptionValue={option => option.idFuncionario}
            getOptionLabel={option => option.nome}
          />
          <Select
            className="selectAutonomos"
            isClearable
            onChange={value => handleChange("idProfissionalAutonomo", value?.idUsuario)}
            placeholder="Profissionais Autonômos"
            options={autonomous}
            getOptionValue={option => option.idUsuario}
            getOptionLabel={option => option.nome}
          />
          <Select
            className="selectPagamentos"
            isClearable
            onChange={value => handleChange("tipoPagamento", value?.tipoPagamento)}
            placeholder="Formas De Pagamento"
            options={payments}
            getOptionValue={option => option.idFormaPagamento}
            getOptionLabel={option => option.tipoPagamento}
          />
        </div>
        <DateTimePicker/>
        <button className="btn btn-primary" onClick={onSubmit}>AGENDAR</button>
      </div>
    </div>
  )
}

export default MakeSchedule;