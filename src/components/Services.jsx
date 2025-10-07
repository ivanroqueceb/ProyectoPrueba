import React, { useContext, useState} from 'react'
import { GlobalContext } from './context/GlobalContext'

function Services() {
    const {addNewServices,state}=useContext(GlobalContext)
    const [data,setData] = useState({name:"",price:""})

    const handleInput =(ev)=>{
        setData({...data,[ev.target.id]:ev.target.value})
    }

    const handleclick = (ev)=>{
        ev.preventDefault()
        addNewServices(data)

    }
  return (
    <>
    <form>
            <input type='text' placeholder='name' id='name' onChange={handleInput}/>
            <input type='number' placeholder='price' id='price' onChange={handleInput}/>
            <button onClick={handleclick}>Añadir</button>

    </form>
    {state.services.map(item=><p>{item.name}-{item.price}</p>)}
    </>
  )
}

export default Services