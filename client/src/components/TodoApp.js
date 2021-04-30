import React, { Component } from 'react'
import axios from 'axios'

import Header from './Header'
import Input from './Input'
import ListTodo from './ListTodo'

export default class Todo extends Component {
    state = {
        todos: []
    }

    componentDidMount(){
        this.getTodos()
    }

    getTodos = () =>{
        axios.get('/api/todos')
            .then(res => {
                if(res.data){
                    this.setState({
                        todos: res.data
                    })
                }
            })
    }

    deleteTodo = (id) => {
        axios.delete(`/api/todos/${id}`)
            .then(res => {
                if(res.data){
                    this.getTodos()
                }
            })
            .catch(err => console.log(err))
    }

    updateTodo = (id) => {
        axios.post(`/api/todos/${id}`)
            .then(res => {
                if(res.data){
                    this.getTodos()
                }
            })
            .catch(err => console.log(err))
    }


    render() {
        let {todos} = this.state
        
        return (
            <div>
                <Header/>
                <Input getTodos={this.getTodos}/>
                <ListTodo todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
            </div>
        )
    }
}
