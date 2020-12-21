import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import Select from 'react-select';
import { toast } from 'react-toastify';
import Navbar from '../../core/components/Navbar';
import DateTimePicker from '../../core/components/Scheduler/Scheduler.js';
import './styles.css';
import { BACKEND_URL } from '../../core/constants/api';

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

  const [selectedSaloon, setSelectedSaloon] = useState(null)
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [selectedPayment, setSelectedPayment] = useState(null)

  useEffect(() => {
    axios(`${BACKEND_URL}/servicos`, { headers })
      .then(response => {
        setServices(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios(`${BACKEND_URL}/saloes`, { headers })
      .then(response => {
        setSaloons(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios(`${BACKEND_URL}/autonomos`, { headers })
      .then(response => {
        setAutonomous(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  const handleChange = (name, value) => {
    setFormState(state => ({
      ...state,
      [name]: value
    }))
  }

  const handleChangeSaloon = (saloon) => {

    setSelectedSaloon(saloon)
    setSelectedEmployee(null)
    setSelectedPayment(null)

    setEmployees(saloon?.funcionarios)
    setPayments(saloon?.formasPagamento)
  }

  const handleChangeDateTime = (value) => {
    const normalizedDateTime = moment(value).format('yyyy-MM-DDTHH:mm:ss');
    handleChange("dataHora", normalizedDateTime,);
  }

  const onSubmit = () => {
    axios.post(`${BACKEND_URL}/agendamentos`, formState, { headers })
      .then((response) => {
        toast.success("Agendamento criado com sucesso!");
      })
      .catch(error => {
        toast.error(error.response.data.mensagem);
      })
  }

  return (
    <div className="backgroundImage"
      style={{
        backgroundImage: `url("http://localhost:3000/images/backgroundImage.jpg")`
      }}>
      <Navbar />
      <h3 className="titleSchedule">AGENDAR PROCEDIMENTO</h3>
      <div className="container">
        <div className="row allSelects stbLogoBack">
          <div className="col-6">
            {/* <label></label> */}
            <Select
              classNamePrefix="react-select"
              isClearable
              onChange={value => handleChange("idServico", value?.idServico)}
              placeholder="Serviços"
              options={services}
              getOptionValue={option => option.idServico}
              getOptionLabel={option => option.nomeServico}
            />
            <Select

              classNamePrefix="react-select"
              isClearable
              onChange={saloon => handleChangeSaloon(saloon)}
              value={selectedSaloon}
              placeholder="Salões"
              options={saloons}
              getOptionValue={option => option.idUsuario}
              getOptionLabel={option => option.nomeFantasia}
            />
            <Select
              classNamePrefix="react-select"
              isClearable
              onChange={value => {
                setSelectedEmployee(value);
                handleChange("idFuncionario", value?.idFuncionario)
              }}
              value={selectedEmployee}
              placeholder="Funcionarios"
              options={employees}
              getOptionValue={option => option.idFuncionario}
              getOptionLabel={option => option.nome}
            />
            <Select
              classNamePrefix="react-select"
              isClearable
              onChange={value => handleChange("idProfissionalAutonomo", value?.idUsuario)}
              placeholder="Profissionais Autonômos"
              options={autonomous}
              getOptionValue={option => option.idUsuario}
              getOptionLabel={option => option.nome}
            />
            <Select
              classNamePrefix="react-select"
              isClearable
              onChange={value => {
                setSelectedPayment(value);
                handleChange("tipoPagamento", value?.tipoPagamento)
              }}
              value={selectedPayment}
              placeholder="Formas De Pagamento"
              options={payments}
              getOptionValue={option => option.idFormaPagamento}
              getOptionLabel={option => option.tipoPagamento}
            />
          </div>
          <div className="col-6">
            <DateTimePicker onChange={handleChangeDateTime} />
            <button
              type="button"
              className="btn btn-lg btn-primary mt-3 btnAgendar"
              onClick={onSubmit}
            >
              Criar agendamento
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeSchedule;