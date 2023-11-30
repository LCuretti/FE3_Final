import React from 'react'
import { Link } from 'react-router-dom'
import { useOdonContext } from '../Context/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state} = useOdonContext()
  return (
    <div>
      <Link to ="/">Home</Link>
      <Link to ="/favs">Favs</Link>
      <Link to ="/contact">Contact</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme {state.theme ? "☀️" : "🌚"}</button>
    </div>
  )
}

export default Navbar