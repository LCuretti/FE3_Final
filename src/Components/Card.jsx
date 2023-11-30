import React from "react";
import { Link } from "react-router-dom";


const Card = ({ odontologo }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"/detail/" + odontologo.id}>
        <img src="/public/images/doctor.jpg" alt="logo de doctor" style={{ maxWidth: "100%", height: "auto" }}/>
        <h4>{odontologo.name}</h4>
        <h4>{odontologo.username}</h4>
        <h4>{odontologo.id}</h4>
      </Link>      
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
