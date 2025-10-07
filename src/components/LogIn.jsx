import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'

function LogIn() {

  const {addNewUser}=useContext(GlobalContext)
  const userFake = {name:"anacleta",email:"ana@gmail.com"}
  const handleClick =(ev)=>{
    ev.preventDefault()
    addNewUser(userFake)
  }
  return (
    <div>
        <button onClick={handleClick}>Añadir usuario</button>
    </div>
  )
}

export default LogIn