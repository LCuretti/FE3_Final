import React from "react";
import Card from "../Components/Card";
import { useOdonContext } from "../Context/Context";

const Favs = () => {
  const { state } = useOdonContext();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => (
          <Card odontologo={fav} key={fav.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
