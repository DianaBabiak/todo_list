import {useState} from "react";

interface AddTodoProps {
    handleAddTodo: (inputTodoText: string) => void
}

export function AddTodo({handleAddTodo}: AddTodoProps) {
    const [inputTodoText, setInputTodoText] = useState('')
    const MAX_COUNT_CHARS = 8
    return <>
        <input value={inputTodoText} onChange={(e) => {
            if (e.target.value.length<=MAX_COUNT_CHARS){
             setInputTodoText(e.target.value)
            }
        }}
         onKeyPress={(e)=>{
             if (e.key==='Enter'){
                 handleAddTodo(inputTodoText);
                 setInputTodoText('')
             }
         }} />
        <button onClick={() => {
            handleAddTodo(inputTodoText);
            setInputTodoText('')
        }}>Add
        </button>
    </>
}