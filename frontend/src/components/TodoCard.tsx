import {Todo} from "../model/Todo";
import axios from "axios";
import "./TodoCard.css";


type TodoCardProps = {
    todo : Todo
}

export default function TodoCard({todo}: TodoCardProps) {

    const onClickAdvance = () => {
        let target = "";
        if (todo.status === "OPEN") {
            target="IN PROGRESS";
        } else if (todo.status === "IN PROGRESS") {
            target="DONE";
        } else if (todo.status === "") {
            target="OPEN";
        }
        axios.put("/api/todo/"+todo.id, {id: todo.id, description: todo.description, status: target})
    }

    return (
    <div>
        <div className={"TDCard"}>
            <div className={"ToDoDescription"}><h3>{todo.description}</h3></div>
            <div className={"ToDoStatus"}><b>Status: </b>{todo.status}</div>
            <button onClick={onClickAdvance}>Advance</button>
        </div>
    </div>
    )
}