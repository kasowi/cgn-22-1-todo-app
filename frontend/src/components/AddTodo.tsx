import {useState} from "react";
import {Todo} from "../model/Todo";
import axios from "axios";


type AddTodoProps = {
    addTodo: (newTodo: Todo) => void
}

export default function AddTodo({addTodo}: AddTodoProps) {

    const [newDescription, setNewDescription] = useState<string>('');
    const [newStatus, setNewStatus] = useState<string>('OPEN');

    const handleChange =(event: any) => {
        setNewDescription(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert("You submitted a new todo: " + newDescription)
        const newTodo : Todo = {description: newDescription, status: newStatus, id: ""}
        console.log(newTodo)

        axios.post("/api/todo", newTodo)
            .then(response => response.data)
            .then((todo) => addTodo(todo))
            .catch(console.error)
    }

    return (
        <div>
        <div>Add a new task...</div>
        <form onSubmit={handleSubmit}>
            <input type ={"text"} required value={newDescription} onChange={handleChange}/>
            <input type={"submit"} value={"Submit"} />
        </form>
        </div>
    )
}