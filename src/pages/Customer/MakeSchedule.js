import { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import Select from 'react-select';
import { toast } from 'react-toastify';
import Navbar from '../../core/components/Navbar';
import DateTimePicker from '../../core/components/Scheduler/Scheduler.js';
import './styles.css';

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
  }, []);

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

  const handleChangeDateTime = (value) => {
    const normalizedDateTime = moment(value).format('yyyy-MM-DDTHH:mm:ss');
    handleChange('dataHora', normalizedDateTime,);
  }

  const onSubmit = () => {
    axios.post("http://localhost:3000/agendamentos", formState, { headers })
      .then(() => {
        toast.success("Agendamento criado com sucesso!");
      })
      .catch(error => {
        toast.error("Houve um erro ao criar agendamento!");
      })
  }

  // const names = [
  //   {
  //     id: 1,
  //     name: 'name 1'
  //   },
  //   {
  //     id: 2,
  //     name: 'name 2'
  //   },
  //   {
  //     id: 3,
  //     name: 'name 3'
  //   }
  // ];

  // https://pt-br.reactjs.org/docs/lists-and-keys.html

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3>AGENDAMENTO</h3>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* {names.map(item =>
                <h1 key={item.id}>{item.name}</h1>
              )} */}
              <Select
                className="selectServico mb-3"
                classNamePrefix="react-select"
                isClearable
                onChange={value => handleChange("idServico", value?.idServico)}
                placeholder="Serviços"
                options={services}
                getOptionValue={option => option.idServico}
                getOptionLabel={option => option.nomeServico}
              />
              <Select
                className="selectSalao mb-3"
                classNamePrefix="react-select"
                isClearable
                onChange={saloon => handleChangeSaloon(saloon)}
                placeholder="Salões"
                options={saloons}
                getOptionValue={option => option.idUsuario}
                getOptionLabel={option => option.nomeFantasia}
              />
              <Select
                className="selectFuncionarios mb-3"
                classNamePrefix="react-select"
                isClearable
                onChange={value => handleChange("idFuncionario", value?.idFuncionario)}
                placeholder="Funcioarios"
                options={employees}
                getOptionValue={option => option.idFuncionario}
                getOptionLabel={option => option.nome}
              />
              <Select
                className="selectAutonomos mb-3"
                classNamePrefix="react-select"
                isClearable
                onChange={value => handleChange("idProfissionalAutonomo", value?.idUsuario)}
                placeholder="Profissionais Autonômos"
                options={autonomous}
                getOptionValue={option => option.idUsuario}
                getOptionLabel={option => option.nome}
              />
              <Select
                className="selectPagamentos mb-3"
                classNamePrefix="react-select"
                isClearable
                onChange={value => handleChange("tipoPagamento", value?.tipoPagamento)}
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
                className="btn btn-lg btn-block btn-primary mt-3"
                onClick={onSubmit}
              >
                Criar agendamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeSchedule;