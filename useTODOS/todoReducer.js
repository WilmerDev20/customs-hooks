


export const todoReducer=(initialState, action)=>{

    switch (action.type) {
        case '[TODO]AddTODO':
            
            return [...initialState,action.payload];

        case '[TODO]DeleteTODO':
            return initialState.filter( todo=>todo.id !== action.payload);//se regresa los todos con el id diferente al payload.id
            
        case '[TODO]ToggleTODO':
            return initialState.map(todo=>{

                if(todo.id===action.payload){//id
                    return{
                        ...todo,
                        done:!todo.done
                    }
                }   

                return todo;
            });
    
        default:
            return initialState;
    }


}


