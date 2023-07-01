import {type TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType { //We bring all with extends and we add one new prop (onRemoveTodo)
    // onRemoveTodo: (id: string) => void
    onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({id}: TodoId) => void
}

const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {

    // const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     onToggleCompleteTodo({
    //         id, 
    //         completed: event.target.checked
    //     })
    // }

    return (
        <div className="view">
            <input 
                type="checkbox" 
                className="toggle" 
                checked={completed} 
                //onChange={handleChangeCheckbox}
                onChange={(event) => {
                    onToggleCompleteTodo({id, completed: event.target.checked})
                }}
            />
            <label>{title}</label>
            <button 
                className="destroy"
                // onClick={() => {onRemoveTodo(id)}}
                onClick={() => {onRemoveTodo({id})}}
            />
        </div>
    )
} 

export default Todo