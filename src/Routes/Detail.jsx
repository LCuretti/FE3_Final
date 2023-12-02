import React from "react";
import { useParams } from "react-router-dom";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [odon, setOdon] = useState({});
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  useEffect(() => {
    const fetchOdon = async () => {
      const res = await axios(url);
      setOdon(res.data);
      //  axios(url)
      //  .then(res => setOdon (res.data))
    };
    fetchOdon();
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>

      <h2>{odon.name}</h2>
      <h2>{odon.email}</h2>
      <h2>{odon.phone}</h2>
      <h2>{odon.website}</h2>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
