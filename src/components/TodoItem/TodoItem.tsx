import styles from "./TodoItem.module.scss"
import {handleCheckboxClickPropsType, TTodoItem} from "../../types.ts"
import {EditableLabel} from "../EditableLabel/EditableLabel.tsx"


interface TodoItemProps extends TTodoItem {
    onDelete:(idItem:number)=>void
    idTodo:number
    onCheckboxClick:({idTodo,idItem,checkedItem}:handleCheckboxClickPropsType)=>void
    onChangeLabelItem:(newLabel:string,itemId:number)=>void

}
export function TodoItem ({label, checked,onDelete,id,idTodo,onCheckboxClick,onChangeLabelItem}:TodoItemProps){
    const changeLabel = (label:string)=>{
        onChangeLabelItem(label, id)
    }
    return(
        <div className={checked ? styles.isDone:''}>
            <div className={styles.label}>
            <input onChange={()=>{onCheckboxClick({idTodo,idItem:id,checkedItem:checked})}} className={styles.checkbox} type="checkbox" checked={checked}/>
            <EditableLabel onChangeLabel={changeLabel} label={label}/>
            <button onClick={()=>{onDelete(id)}}>x</button>
            </div>
        </div>)
}





