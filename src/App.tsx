import {useState} from 'react'
import Todos from './components/Todos'
import { type Todo as TodoType, type TodoId, type FilterValue, type TodoTitle } from './types'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'
import Header from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'Aprender React con Typescript',
    completed: true
  },
  {
    id: '2',
    title: 'See other React-Typescript proyects',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  },
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos) //In this case typescript use inferential of data
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: TodoId): void => { //id: string --> how was it
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  //Another form {id, completed}: {id: TodoId, completed: TodoCompleted}
   const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => { 
      const newTodos = todos.map(todo => {
         if(todo.id === id){
            return {
               ...todo,
               completed
            }
         }
         return todo
      })
      setTodos(newTodos)
   }

   const handleFilterChange = (filter: FilterValue): void => {
      setFilterSelected(filter)
   }

   const handleRemoveAllCompleted = (): void => {
      const newTodos = todos.filter(todo => !todo.completed)
      setTodos(newTodos)
   }

   const activeCount = todos.filter(todo => !todo.completed).length
   const completedCount = todos.length - activeCount

   const filteredTodos = todos.filter(todo => {
      if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
      if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
      return todo
   })

   const handleAddTodo = ({title}: TodoTitle): void => {
      const newTodo = {
         title,
         id: crypto.randomUUID(),
         completed: false
      }

      const newTodos = [...todos, newTodo]
      setTodos(newTodos)
   }

  return (
      <div className='todoapp'>
         <Header onAddTodo={handleAddTodo}/>
         <Todos
            onToggleCompleteTodo={handleCompleted}
            onRemoveTodo={handleRemove}
            todos={filteredTodos} 
         />
         <Footer 
            activeCount={activeCount}
            completedCount={completedCount}
            filterSelected={filterSelected}
            onClearCompleted={handleRemoveAllCompleted}
            handleFilterChange={handleFilterChange}
         />
      </div>
  )
}

export default App
