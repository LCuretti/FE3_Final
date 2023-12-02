import React from "react";
import { useState } from "react";
import { useOdonContext } from "../Context/Context";

const Form = () => {
  const { state } = useOdonContext();
  //Aqui deberan implementar el form completo con sus validaciones
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();
    const regexName = /^[^ ]{3,}.*$/;
    if (regexName.test(nombre) && nombre.length > 5) {
      setUsuario({ nombre, email });
      setShow(true);
      setError(false);
      setEmail("");
      setNombre("");
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <div>
      {
        <form
          onSubmit={handleSumbit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            className={state.theme ? "" : "dark"}
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <br />
          <input
            type="email"
            className={state.theme ? "" : "dark"}
            placeholder="Ingresa tu email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <button className={state.theme ? "" : "dark"}>Enviar</button>
        </form>
      }

      <br />
      {show && (
        <h5 style={{ textAlign: "center" }}>
          Gracias {usuario.nombre}, te contactaremos cuando antes vía mail.
        </h5>
      )}
      {error && (
        <h5 style={{ textAlign: "center" }}>
          Por favor verifique su información nuevamente
        </h5>
      )}
    </div>
  );
};

export default Form;
