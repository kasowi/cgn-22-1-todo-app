import axios from "axios";
import {Todo} from "../model/Todo";
import {FormEvent, useState} from "react";

type TodoCardProps = {
    todo : Todo
    addTodo: (newTodo: Todo) => void
}

export default function AdvanceButton({todo, addTodo}: TodoCardProps) {

    const onClickAdvance = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let target = "";
        if (todo.status === "OPEN") {
            target="IN PROGRESS";
        } else if (todo.status === "IN PROGRESS") {
            target="DONE";
        } else if (todo.status === "") {
            target="OPEN";
        }


        axios.put(`/api/todo/${todo.id}`, {id: todo.id, description: todo.description, status: target})
            .then(response => response.data)
            .then((todo) => addTodo(todo))
            .catch(console.error)


    }

    return (<div>
        <form onSubmit ={onClickAdvance}>
              <button type ={"submit"}>Advance</button>
        </form>
        </div>
    )
}