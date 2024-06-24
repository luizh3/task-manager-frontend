import React from 'react';
import './Style.css';

const Login = () => {
  return (
    <div className="main-login">
      <div className="right-login">
        <div className="card-login">
          <h2>Login</h2>
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário" />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" />
          </div>
          <button className="btn-login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
