import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, setFilterValue, toggleTodo, setSearchQuery, clearAllTodos } from '../features/todoSlice'
import styles from '../../src/companents/todo.module.css'
import { FaTrash } from "react-icons/fa6";
import { IoMdCheckbox } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";

const Todo = () => {
    const [inputVal, setInputVal] = useState("")
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    console.log(todos);

    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputVal.trim()))

        setInputVal("")
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }


    const filteredTodosBySelect = todos.items.filter((todo) => {
        switch (todos.filter) {
            case "completed":
                return todo.isCompleted
            case "pending":
                return !todo.isCompleted
            default:
                return todo
        }
    })

    const filteredTodos = filteredTodosBySelect.filter((todo) => todo.text.toLowerCase().includes(todos.searchQuery))


    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleAddTodo}>
                    <input className={styles.input} type="text" name="" id="" onChange={(e) => { setInputVal(e.target.value) }} value={inputVal} />
                    <button className={styles.add}>Add</button>
                </form>
                <hr />

                <div>
                    <select  className={styles.select}   name="" id="" onChange={(e) => { dispatch(setFilterValue(e.target.value)) }}>
                        <option className={styles.all} value="all">All Todos</option>
                        <option className={styles.complated} value="completed">Completed Todos</option>
                        <option className={styles.pending} value="pending">Pending Todos</option>
                    </select>
                    <input  className={styles.search} type="search" placeholder='search...' onChange={(e) => { dispatch(setSearchQuery(e.target.value.trim())) }} />
                    <button className={styles.clear} onClick={() => dispatch(clearAllTodos())}>Reset</button>
                </div>
                <ul style={{ listStyle: "none" }}>
                    {todos.items.length > 0 ? filteredTodos.map((todo) => {
                        return (<li key={todo.id}>
                            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.text}
                                <button className={styles.fatrash} onClick={() => { handleDeleteTodo(todo.id) }}><FaTrash/></button>
                                <button className={styles.mark} onClick={() => { dispatch(toggleTodo(todo.id)) }}>{!todo.isCompleted ? <RiCheckboxBlankLine /> : <IoMdCheckbox />}</button>
                            </span>
                        </li>)
                    }) : <p style={{ color: "red" }}>There is no todos yet!</p>}
                </ul>
            </div>
        </>
    )
}

export default Todo

