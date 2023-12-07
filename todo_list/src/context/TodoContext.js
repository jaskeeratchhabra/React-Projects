import React,{useContext,createContext} from 'react'

export const TodoContext=createContext([{
        todos:[{
            id:1,
            todo:"hello",
            completed:"false"
        }],
        addTodo:(todo)=>{
        },
        updateTodo:(id,Todo)=>{
        },
        deleteTodo:(id)=>{
        },
        toggleComplete:(id)=>{}
    }
])

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}



