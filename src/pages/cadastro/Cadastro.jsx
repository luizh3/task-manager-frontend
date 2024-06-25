import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Cadastro.css";
import ApiEndpoint from "../../api/ApiEndpoint";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = await ApiEndpoint.register({
      username,
      password,
    });

    if (error) {
      toast.error("Falha ao cadastrar usuario");
      return;
    }

    navigate("/login", {
      state: {
        toast: {
          type: "success",
          message: "Sucesso ao criar usuario!",
          duration: 3000,
        },
      },
    });
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "shadow-md",
          style: {
            padding: "16px",
          },
        }}
        containerStyle={{
          top: 100,
        }}
      />

      <div className="background">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <div className="input-field">
              <input
                type="text"
                placeholder="Nome de usuario"
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
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
