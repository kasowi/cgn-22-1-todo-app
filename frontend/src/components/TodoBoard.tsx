import { Todo } from "../model/Todo";
import TodoCard from "./TodoCard";
import "./TodoBoard.css"

type TodoBoardProps = {
    todos : Todo[]
}

export default function TodoBoard({todos}: TodoBoardProps) {
    return  <div>
        <h2>Dashboard</h2>
        <div className={"TodoItems"}>
        <div className={"TodosOpen"}>
            <h3>OPEN</h3>
            {todos.filter(todos => todos.status === "OPEN").map(lonelyTodo => <TodoCard todo={lonelyTodo}/>)}
        </div>
        <div className={"TodosInProgress"}>
            <h3>IN PROGRESS</h3>
            {todos.filter(todos => todos.status === "IN PROGRESS").map(lonelyTodo => <TodoCard todo={lonelyTodo}/>)}
        </div>
        <div className={"TodosDone"}>
            <h3>DONE</h3>
            {todos.filter(todos => todos.status === "DONE").map(lonelyTodo => <TodoCard todo={lonelyTodo}/>)}
        </div>
        </div>

    </div>

}

