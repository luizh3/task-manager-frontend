import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Cadastro.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Login:", { username, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Confirmar senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Login;