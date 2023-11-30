import React from 'react'
import Card from '../Components/Card'
import { useOdonContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useOdonContext()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.prof.map(odontologo => <Card key={odontologo.id} odontologo= {odontologo}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home