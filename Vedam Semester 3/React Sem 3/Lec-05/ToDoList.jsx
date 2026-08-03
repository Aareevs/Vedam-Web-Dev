import { useReducer } from 'react'

const ToDoList = () => {

let data={
        input:"",
        list:[]
    }

    function reducer(state,action){
        if(action.type=="inp"){
            return{
                ...state,
                input:action.payload
            }

        }
        else if(action.type=="add"){
            return{
               ...state,
               list:[...state.list , state.input]
            }

        }
        return state
    }
    
  let [state,dispatch]=  useReducer(reducer,data)
  return (
    <div>
        <input onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}/>
        <button onClick={()=>dispatch({type:"add"})}>Add</button>
        {
            state.list.map((a,index)=>{
                return(<>
                <li key={index}>{a}</li>
                </>)
            })
        }
    </div>
  )
}

export default ToDoList
