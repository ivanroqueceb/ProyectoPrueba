import { createContext, useReducer,useState } from "react";

export const GlobalContext =createContext()
const initialState = {
  users:[],
  services:[],
  authToken: null
}
//userReducer
function globalReducer(state,action){
  //action:{type:"addUser",payload:{}}
    switch(action.type){
      case "ADDUSER":
          return{
            ...state,
            users:[...state.users,action.payload]
          }
      case "ADDSERVICES":
          return{
            ...state,
            services:[...state.services,action.payload]
          }
      /*case"addServices":
      case "addToken":*/
    }
}

export const GlobalProvider =({children})=>{
    const [state,dispatch]=useReducer(globalReducer,initialState)

    const addNewUser =(user)=>{
        dispatch({type:"ADDUSER",payload:user})
    }
    const addNewServices =(services)=>{
        dispatch({type:"ADDSERVICES",payload:services})
    }

    return <GlobalContext.Provider value={{state,addNewUser,addNewServices}}>
      {children}
    </GlobalContext.Provider>

}