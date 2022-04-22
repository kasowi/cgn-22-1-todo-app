import {Todo} from "../model/Todo";
import "./TodoCard.css";
import AdvanceButton from "./AdvanceButton";
import useTodos from "../hooks/useTodos";


type TodoCardProps = {
    todo : Todo
}

export default function TodoCard({todo}: TodoCardProps) {
    
    const {todos, addTodo} = useTodos()
    
    return (
    <div>
        <div className={"TDCard"}>
            <div className={"ToDoDescription"}><h4>{todo.description}</h4></div>
            <div className={"ToDoStatus"}><b>Status: </b>{todo.status}</div>
            <AdvanceButton todo={todo} addTodo={addTodo}/>
        </div>
    </div>
    )
}