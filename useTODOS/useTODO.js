import { useEffect,useReducer } from "react";
import { todoReducer } from "./todoReducer";



const initialState=[];

const init=()=>{
    return JSON.parse(localStorage.getItem('todos') || []);//si es nulo, || [], entonces regrese un arreglo vacio
}

export const useTODO=()=>{

    
    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));

    }, [todos])
        



    const handleNewTODO=(todo)=>{
        const action={
            type:'[TODO]AddTODO',
            payload:todo
        }

        dispatch(action);
    }
    

    const handleDeleteTODO=(todo)=>{
        const action={
            type:'[TODO]DeleteTODO',
            payload:todo.id
        }

        dispatch(action);
    }
    
    const handleToggleTODO=(id)=>{
        const action={
            type:'[TODO]ToggleTODO',
            payload:id
        }

        dispatch(action);
        
    }

    const todoCount= todos.length;

    const pendingTodosCount= todos.filter(todo=> !todo.done).length;
    

    return {
        todos,
        handleNewTODO,
        handleDeleteTODO,
        handleToggleTODO,
        todoCount,
        pendingTodosCount
        
    }
}