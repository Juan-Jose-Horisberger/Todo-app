import {type TodoTitle } from "../types"
import CreateTodo from "./CreateTodo"

interface Props{
    onAddTodo : ({title}: TodoTitle) => void
}

const Header: React.FC<Props> = ({onAddTodo}) => {
    return (
        <header className="header">
            <h1>
                Todo
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201" alt="" style={{width: '65px', height: 'auto'}}/>
            </h1>
            <CreateTodo saveTodo ={onAddTodo} />
        </header>
    )
}

export default Header