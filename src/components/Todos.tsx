import React from 'react'
import {type Todo as TodoType, type TodoId, type ListOfTodos} from '../types'; //Ths types of another files, it must have the type before
import Todo from './Todo';


interface Props {
    todos: ListOfTodos,
    // onRemoveTodo: (id: string) => void
    onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({id}: TodoId) => void

}

const Todos: React.FC<Props> = ({todos, onRemoveTodo, onToggleCompleteTodo}) => {
  return (
    <ul className='todo-list'>
        {todos.map(todo => (
            <li 
                key={todo.id} 
                className={`${todo.completed ? 'completed' : ''}`}>
                <Todo
                    key={todo.id} 
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggleCompleteTodo={onToggleCompleteTodo}
                    onRemoveTodo={onRemoveTodo}
                />
            </li>
        ))}
    </ul>
  )
}

export default Todos
