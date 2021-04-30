import React from 'react'


export default function ListTodo({todos, deleteTodo, updateTodo}) {
    return (
        <div>
            <ul>
                {
                    todos && todos.length > 0 ?
                    (
                        todos.map(todo => {
                            const textDecoration = todo.isCompleted ? 'line-through' : 'none'
                            return(
                                <h5 key={todo._id} className="d-flex flex-row justify-content-between border-bottom">
                                    <div className="p-2">
                                        <input type='checkbox' defaultChecked={todo.isCompleted} onClick={() => updateTodo(todo._id)}/>
                                    </div>
                                    <div className="p-2 flex-fill" style={{textDecoration}}>
                                        {todo.title}
                                    </div>
                                    <div className="p-2 align-self-end ml-auto">
                                        <i 
                                            className="fa fa-trash text-danger" 
                                            aria-hidden="true" 
                                            onClick={() => deleteTodo(todo._id)}>
                                        
                                        </i>
                                    </div>
                                </h5>
                            )
                        })
                    ) : (
                        <li>No Todos! Add One Now!</li>
                    )
                }
            </ul>
        </div>
    )
}
