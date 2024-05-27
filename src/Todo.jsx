export default function({todos, deleteTodo}){
    return(
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.todo} <button onClick={()=>deleteTodo(todo.id)}>delete</button></li>
            ))}
        </ul>
    )
}