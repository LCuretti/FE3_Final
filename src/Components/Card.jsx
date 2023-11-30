import React from "react";


const Card = ({ character }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="../../public/images/doctor.jpg" alt="logo de doctor" style={{ maxWidth: "100%", height: "auto" }}/>
        <h4>{character.name}</h4>
        <h4>{character.username}</h4>
        <h4>{character.id}</h4>

      
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
