import { useReducer } from 'react'

const UseReducerDemo = () => {
    function reducer(state,action){
        if(action.type==="increment"){
            return state+1
        }
        else if(action.type==="decrement"){
            return state-1
        }
        else if(action.type==="reset"){
            return 0
        }
        else{
            return state
        }
    }
    let [state,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={()=>{
        dispatch({type:"increment"})
      }}>+</button>

        <button onClick={()=>{
          dispatch({type:"decrement"})
        }}>-</button>

        <button onClick={()=>{
          dispatch({type:"reset"})
        }}>Reset</button>
    </div>
  )
}

export default UseReducerDemo
