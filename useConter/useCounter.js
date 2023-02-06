import { useState } from "react"

export const useCounter=(initialValue=10)=>{

    

    const [counter, setCounter] = useState(initialValue)

    
    
    const incrementCounter=()=>{
        setCounter(counter + 1 );
    }
    const incrementCounterAPI=()=>{
        if(counter ==19) return;
        setCounter(counter + 1 );
    }


    const decrementCounter=(value=1)=>{
        // if(counter===0 ) return ;
        
        setCounter(counter - value );
    }
    const restartCounter=()=>{
        setCounter(initialValue );
    }


    return {
        counter,
        incrementCounter,
        incrementCounterAPI,
        decrementCounter,
        restartCounter

    }
}