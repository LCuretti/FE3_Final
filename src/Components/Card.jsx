import React from "react";
import { Link } from "react-router-dom";
import { useOdonContext } from "../Context/Context";

const Card = ({ odontologo }) => {
  const { state, dispatch } = useOdonContext();

  const findFav = state.favs.find((fav) => fav.id === odontologo.id);

  const addFav = () => {
    if (findFav) {
      dispatch({ type: "DELETE_FAV", payload: odontologo });
    } else {
      dispatch({ type: "ADD_FAV", payload: odontologo });
    }
  };
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"/detail/" + odontologo.id}>
        <img
          src="/images/doctor.jpg"
          alt="logo de doctor"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h4>{odontologo.name}</h4>
        <h4>{odontologo.username}</h4>
        <h4>{odontologo.id}</h4>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav}>{findFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;

//{addFav} className="favButton">Add fav
//dispatch({type: "ADD_FAV", payload: odontologo}
