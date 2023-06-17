import {TodoItem} from "../TodoItem/TodoItem.tsx";
import styles from "./Todo.module.scss"
import {useState} from "react";
import {clsx} from 'clsx';
import {handleChangeLabelPropsType, handleCheckboxClickPropsType, TTodo} from "../../types.ts"
import {EditableLabel} from "../EditableLabel/EditableLabel.tsx";




export interface TodoProps extends TTodo {
    onDeleteTodoItem: (idTodo:number,idItems:number) => void
    onDeleteTodo:(idTodo:number)=>void
    onAddTodoItem:(label:string, todoId:number)=>void
    onCheckboxClick:({idTodo,idItem,checkedItem}:handleCheckboxClickPropsType)=>void
    onChangeLabel:({newLabel,todoId,itemId}:handleChangeLabelPropsType)=>void
    handlerChangeTodoTitle:(idTodo:number, newLabel:string)=>void
}
export function Todo({title, items,onDeleteTodoItem, id,onDeleteTodo,onAddTodoItem,onCheckboxClick,onChangeLabel,handlerChangeTodoTitle}: TodoProps) {
    const [status, setStatus]=useState('All')
    const[inputText,setInputText]=useState<string>('')
    const [error,setError]=useState<string| null>(null)
    const filterItems = items.filter((el)=>{
        if (status==='All'){
            return true;
        }
        if(status==='Completed'){
            return el.checked
        }
        return !el.checked

    })
    const addTodoItem =(idItems:number)=>{
        onDeleteTodoItem (id,idItems)
    }
    const changeLabelTodoItem = (newLabel:string,itemId:number)=>{
        onChangeLabel({newLabel, todoId:id, itemId})}
    const onChangeTitleTodo = (newLabel:string)=>{
        handlerChangeTodoTitle(id, newLabel)
    }
    return (
        <div>
            <button onClick={()=>{onDeleteTodo(id)}}>Delete</button>
            <div>
                <div className={styles.legend}>
                <EditableLabel  label={title} onChangeLabel={onChangeTitleTodo}/>
                </div>
            {/*<legend className={styles.legend}>{title}</legend>*/}
            <div className={styles.search}>
            <input value={inputText} onChange={(e)=>{
                if (e.target.value.length<=12 && e.target.value!=='test'){
                setInputText(e.target.value);
                }
            }
            }
            className={error ? styles.error:''}
            onKeyPress={(e)=>{
                setError(null)
                if (e.charCode===13){
                    onAddTodoItem(inputText,id)
                    setInputText('')
            }}}
            />
            <button onClick={()=> {
                if (inputText.trim() ===''){
                    return setError('Title is required')
                }
                onAddTodoItem(inputText,id);
               setInputText('')
            }}>+</button>
            </div>
                {error && <div className={styles.errorMessage}>{error}</div>}
            {filterItems.map((item) => <TodoItem key={item.id} onChangeLabelItem={changeLabelTodoItem} onCheckboxClick={onCheckboxClick} idTodo={id} id={item.id} onDelete={addTodoItem} label={item.label} checked={item.checked}/>)}
            <button onClick={()=>{setStatus('All')}} className={clsx(styles.button,{[styles.selectedButton]:status===('All')})}>All</button>
            <button onClick={()=>{setStatus('Active')}} className={clsx(styles.button,{[styles.selectedButton]:status===('Active')})}>Active</button>
            <button onClick={()=>{setStatus('Completed')}} className={clsx(styles.button,{[styles.selectedButton]:status===('Completed')})}>Completed</button>
            </div>
        </div>
    )
}

// const onHand = ({label, todoId, itemId}: {label: string, todoId: number, itemId: number})=> {
//     ...
// }