export interface TTodo {
    title: string
    items: TTodoItem[]
    id:number
}

export interface TTodoItem {
    label: string,
    checked: boolean
    id:number
}

export interface handleChangeLabelPropsType {
    newLabel: string
    todoId: number
    itemId: number
}

export interface handleCheckboxClickPropsType {
    idTodo: number
    idItem: number
    checkedItem:boolean
}