import { TODO_FILTERS } from "./consts"

export interface Todo {
    id: string
    title: string
    completed: boolean
}

//If we had more parameters, we would simply take the type from our Todo interface.
// export type TodoId = Omit<Todo, 'completed' | 'title'> this would be the opposite of Pick
export type TodoId = Pick<Todo, 'id'> //It will only take into consideration the type of data (id)
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

// typeof TODO_FILTERS[keyof typeof TODO_FILTERS] we get the key and then the typeof to know the value
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

