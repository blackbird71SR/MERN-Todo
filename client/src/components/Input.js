import React, { Component } from 'react'
import axios from 'axios'

export default class Input extends Component {
    state = {
        title:''
    }

    addTodo = (e) =>{
        e.preventDefault();
        const task = {title: this.state.title}

        if(task.title && task.title.length > 0){
            axios.post('/api/todos', task)
                .then(res => {
                    if(res.data){
                        this.props.getTodos()
                        this.setState({title:''})
                    }
                })
                .catch(err =>console.log(err))
        } else {
            console.log('Input required!');
        }
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render() {
        let {title} = this.state
        return (
            <form onSubmit={this.addTodo} className='d-flex'>
                <input type='text' className='form-control rounded-0 flex-fill' onChange={this.handleChange} value={title} placeholder='Add task to Inbox. Press Enter to save.' />
                <button className='btn rounded-0 btn-secondary' stytype='submit'><i class="fa fa-plus" aria-hidden="true"></i></button>
            </form>
        )
    }
}
