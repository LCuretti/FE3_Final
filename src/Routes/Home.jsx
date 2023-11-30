import React from 'react'
import Card from '../Components/Card'
import { useCharContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useCharContext()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map(character => <Card key={character.id} character= {character}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home