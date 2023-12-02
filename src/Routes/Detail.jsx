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

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Detail Dentist id </h1>
      <br/>
      <h2>{odon.name}</h2>
      <h2>{odon.email}</h2>
      <h2>{odon.phone}</h2>
      <h2>{odon.website}</h2>
    </div>
  );
};

export default Detail;
