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
            {todos.filter(todos => todos.status === "OPEN").map(lonelyTodo => <TodoCard todo={lonelyTodo}/>)}
        </div>
        <div className={"TodosInProgress"}>
            {todos.filter(todos => todos.status === "IN PROGRESS").map(lonelyTodo => <TodoCard todo={lonelyTodo}/>)}
        </div>
        <div className={"TodosDone"}>
            {todos.filter(todos => todos.status === "DONE").map(lonelyTodo => <TodoCard todo={lonelyTodo}/>)}
        </div>
        </div>

    </div>

}

