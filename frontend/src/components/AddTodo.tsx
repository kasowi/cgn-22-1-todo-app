import {useState} from "react";
import {Todo} from "../model/Todo";
import axios from "axios";

export default function AddTodo() {
    const [newDescription, setNewDescription] = useState<string>('');
    const [newStatus, setNewStatus] = useState<string>('OPEN');
    const [response, setResponse] = useState<string>()

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const newTodo : Todo = {description: newDescription, status: newStatus, id: ""}
        console.log(newTodo)
        axios.post("/api/todo", newTodo)
            .then(function(response){
                console.log(response.data)
                setResponse(response.data)
            })
            .catch(console.error)
    }

    return (
        <div>
        <div>Add a new task...</div>
        <form onSubmit={handleSubmit}>
            <input type ={"text"} required value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/>
            <input type={"submit"} value={"Submit"} />
        </form>
        </div>
    )
}