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
          {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            {hasError && (
              <div className="alert alert-danger" role="alert">
                Erro ao autenticar usuário!
              </div>
            )}
          <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            name="login"
            ref={register}
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="visually-hidden">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="senha"
            ref={register}
            required
          />
          
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
    </div>
  )
}

export default Login;