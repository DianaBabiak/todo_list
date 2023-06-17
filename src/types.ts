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

export interface HandleChangeLabelProps {
    newLabel: string
    todoId: number
    itemId: number
}

export interface HandleCheckboxClickProps {
    idTodo: number
    idItem: number
    checkedItem:boolean
}

export enum TodoItemStatus {
    All = 'All',
    Active = 'Active',
    Completed='Completed'
}
