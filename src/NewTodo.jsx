import { useState } from "react"

export default function({addTodos}){

    const [newTodo, setNewTodo] = useState({todo: "", id: ""});

    const handleChange = (evt) => {
        setNewTodo({todo: evt.target.value, id: 9})
    }

    const submitTodo = (evt) => {
        evt.preventDefault();
        addTodos(newTodo);
    }

    return(
        <form>
            <label htmlFor="newTodo">Add a new todo: </label>
            <input onChange={handleChange} value={newTodo.todo} type="text" name="newTodo" id="newTodo" />
            <button onClick={submitTodo}>Add todo</button>
        </form>
    )
}