import {useState} from "react";

interface AddTodoProps {
    handleAddTodo: (inputTodoText: string) => void
}

export function AddTodo({handleAddTodo}: AddTodoProps) {
    const [inputTodoText, setInputTodoText] = useState('')
    return <>
        <input value={inputTodoText} onChange={(e) => {
            if (e.target.value.length<=8){
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