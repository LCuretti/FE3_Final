import React from "react";
import { Link } from "react-router-dom";
import { useOdonContext } from "../Context/Context";

const Navbar = () => {
  const { state, dispatch } = useOdonContext();

  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <nav>
      <div className="left-content">
        <span style={{ color: 'red' }}>D</span>H Odonto
      </div>
      <div className="right-content">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={changeTheme} className={state.theme ? "dark" : ""}>
          {state.theme ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
