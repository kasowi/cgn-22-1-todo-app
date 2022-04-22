import {useEffect, useState} from "react";
import {Todo} from "../model/Todo";
import axios from "axios";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])

    console.log(todos)

    useEffect(() => {
        axios.get("/api/todo")
            .then(response => response.data)
            .then(body => setTodos(body))
            .catch(console.error)
    }, [])

    const addTodo = (newTodo : Todo) => {
        setTodos((allTodos: Todo[]) => [...allTodos, newTodo])
    }

    return {todos, addTodo};
}