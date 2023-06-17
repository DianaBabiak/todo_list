import {Todo} from "./components/Todo/Todo.tsx";
import styles from "./components/App.module.scss"
import {useState} from "react";
import {handleCheckboxClickPropsType, TTodo, TTodoItem} from "./types.ts"
import {AddTodo} from "./components/AddTodo/AddTodo.tsx";
import {handleChangeLabelPropsType} from "./types.ts"
// const data: TodoProps[] = [
//     {title:'Programing' , items:[{label:'JS',checked: true},{label:'CSS',checked:false},{label:'React',checked:true}]},
//     {title:'Drinks',items:[{label:'Water',checked: false},{label:'Coffee',checked:false}, {label:'Tea',checked:true}]},
//     {title:'Movies',items:[{label:'1+1',checked: true},{label:'Blond',checked:true},{label:'Cars',checked:true}]},
//     {title:'Family',items:[{label:'Dziana',checked: true},{label:'Kiryl',checked:true},{label:'Sofiya',checked:true}]}
// ]

function App() {
    const [data, setData] = useState<TTodo[]>([
        {
            title: 'Programing',
            id: 1,
            items: [
                {id: 1.1, label: 'JS', checked: true}, {id: 1.2, label: 'CSS', checked: false},
                {id: 1.3, label: 'React', checked: true}
            ]
        },
        {
            title: 'Drinks',
            id: 2,
            items: [
                {id: 2.1, label: 'Water', checked: false},
                {id: 2.2, label: 'Coffee', checked: false},
                {id: 2.3, label: 'Tea', checked: true}
            ]
        },
        {
            title: 'Movies',
            id: 3,
            items: [
                {id: 3.1, label: '1+1', checked: true},
                {id: 3.2, label: 'Blond', checked: true},
                {id: 3.3, label: 'Cars', checked: true}
            ]
        },
        {
            title: 'Family',
            id: 4,
            items: [
                {id: 4.1, label: 'Dziana', checked: true},
                {id: 4.2, label: 'Kiryl', checked: true},
                {id: 4.3, label: 'Sofiya', checked: true}
            ]
        }
    ])
    const handleDeleteTodoItem = (idTodo: number, idItems: number) => {
        const updatedData = data.map((todo) => {
            if (idTodo === todo.id) {
                const filterTodoItems = todo.items.filter((el) => idItems !== el.id)
                return {...todo, items: filterTodoItems}
            }
            return todo
        })
        setData(updatedData)
    }

    const handleDeleteTodo = (idTodo: number) => {
        const editedData = data.filter((filterTodo) => {
            return idTodo !== filterTodo.id;
        })
        setData(editedData)
    }
    const handleAddTodo = (inputTodoText:string)=> {
        const newData = [...data];
        const newTodoId = (data[data.length - 1]?.id ?? 0) + 1
        newData.push({title: inputTodoText, id: newTodoId, items: []});
        setData(newData)
    }

    const handleAddTodoItem = (label: string, todoId:number) => {
        const newTodoItem: TTodoItem={
            id: 10, label: label, checked: false
        }
        const apdatedTodo = data.map((todo)=>{
            if (todoId===todo.id){
                const lastArrayElementIndex=todo.items.length-1
                const lastItem= todo.items[lastArrayElementIndex]
                const newIdItem = lastItem ? lastItem.id + 0.1 : todo.id+0.1
                newTodoItem.id = newIdItem;
                todo.items.push(newTodoItem)
                return todo
            }
        return todo
        })

        setData(apdatedTodo)
    }
    const handleChangeLabel =({newLabel,todoId,itemId}:handleChangeLabelPropsType)=>{
        const changeLabel = data.map((todo)=>{
            if (todo.id===todoId){
                todo.items.map((item)=>{
                    if (item.id===itemId){
                        item.label=newLabel
                    }
                    return item
                })
            }
            return todo
        })
        setData(changeLabel)
    }

    const handlerChangeTodoTitle=(idTodo:number, newLabel:string)=>{
        const aptadedTodo = data.map((todo)=>{
           if (idTodo===todo.id){
               todo.title=newLabel
           }
           return todo
        })
        setData(aptadedTodo)

    }


    const handleCheckboxClick = ({idTodo,idItem,checkedItem}:handleCheckboxClickPropsType)=>{
        const newApdatedTodo = data.map((todo)=>{
            if (todo.id===idTodo) {
                todo.items.map ((item)=>{
                    if (item.id===idItem) {
                        item.checked = !checkedItem
                    }
                    return item
                })
            }
            return todo
        })
        setData(newApdatedTodo)
    }

    return (
        <div className={styles.main}>
           <AddTodo handleAddTodo={handleAddTodo}/>
            {data.map(item => {
                return <Todo key={item.id} handlerChangeTodoTitle={handlerChangeTodoTitle} onChangeLabel={handleChangeLabel} onCheckboxClick={handleCheckboxClick} onAddTodoItem={handleAddTodoItem} onDeleteTodo={handleDeleteTodo} id={item.id}
                             onDeleteTodoItem={handleDeleteTodoItem} title={item.title} items={item.items}/>
            })}
        </div>
    )
}

export default App

