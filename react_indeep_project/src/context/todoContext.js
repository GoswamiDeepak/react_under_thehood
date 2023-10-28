import { createContext, useContext } from "react";


export const todoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "demo ",
            isCompleted : false
        }
    ],
    addTodo : function(todo){},
    updateTodo : function(id ,todo){},
    deleteTodo : function(id){},
    toggleCompleted : (id)=>{},
})

export const usetodo = ()=>{
    return useContext(todoContext)
}

export const todoProvider = todoContext.Provider;