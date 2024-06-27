import { useContext, useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import ApiEndpoint from "../../api/ApiEndpoint";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { Context } from "../../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, handleLogout } = useContext(Context);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // TODO change this

    handleLogout();

    if (location.state?.toast) {
      toast.success(location.state.toast.message);
      setTimeout(
        () => navigate(location.pathname, { replace: true, state: null }),
        location.state.toast.duration
      );
    }
  }, [location, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, data } = await ApiEndpoint.login({
      username,
      password,
    });

    if (error) {
      toast.error(error);
      return;
    }

    handleLogin(data.token);

    navigate("/");
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
          <form onSubmit={handleSubmit} className="form">
            <h1>Acesse o sistema</h1>
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

            <div className="recall-forget">
              <label>
                <input type="checkbox" />
                Lembre de mim
              </label>
              <a href="#">Esqueceu sua senha?</a>
            </div>
            <button type="submit">Login</button>
            <div className="signup-link">
              <p>
                Não tem uma conta? <Link to="/register">Registar</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
