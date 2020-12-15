import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import './styles.css'

function Login() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [hasError, setHasError] = useState(false);

  const onSubmit = data => {
    axios.post('https://5aae71c07389ab0014b7b943.mockapi.io/login', data)
      .then(response => {
        localStorage.setItem('authData', response.data.jwtToken);
        history.push('/agendamento');
        setHasError(false);
      })
      .catch(error => {
        setHasError(true);
      })
  };

  return (
    <div className="container login-container">
      <main className="form-signin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img className="mb-4 st-image" src='/images/Beauty.png' alt="" width="400" height="200" />
          <h1 className="mb-3 fw-normal titulo">ENTRAR</h1>
          {hasError && (
            <div className="alert alert-danger" role="alert">
              Erro ao autenticar usuário!
            </div>
          )}
          <label htmlFor="inputEmail" className="visually-hidden"></label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email"
            name="login"
            ref={register}
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="visually-hidden"></label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Senha"
            name="senha"
            ref={register}
            required
          />

          <button className="btn btn-lg btn-primary" type="submit">ENTRAR</button>
        </form>
      </main>
    </div >
  )
}

export default Login;