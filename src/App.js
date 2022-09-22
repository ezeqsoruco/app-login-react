import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import metodos from "./Rules/RulesLogin";

function App() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  function usuarioChange(e) {
    setUsuario(e.target.value);
  }

  function passChange(e) {
    setPassword(e.target.value);
    console.log(password);
  }

  async function submit() {
    const comando = {
      usuario: usuario,
      password: password,
    };

    console.log(comando);

    const result = await metodos.login(comando);

    console.log(result);
  }

  return (
    <div className="App">
      <h2>Login</h2>
      <div>
        <label>Usuario </label>
        <input value={usuario} onChange={usuarioChange}></input>
      </div>
      <div>
        <label>Contraseña </label>
        <input value={password} type="password" onChange={passChange}></input>
      </div>
      <button onClick={submit}>Iniciar Sesión</button>
    </div>
  );
}

export default App;
