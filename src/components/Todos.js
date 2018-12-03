import React from 'react'
import API from 'goals-todos-api'

import {
	addTodo,
	toggleTodo,
	removeTodo,
} from '../actions/todos'
import List from './List'

export default class Todos extends React.Component {
	addTodo = (e) => {
		e.preventDefault()
		const name = this.input.value

		return API.saveTodo(name)
			.then((todo) => {
				this.props.dispatch(addTodo(todo))
				this.input.value = ''
			})
			.catch(() => {
				alert('An error has occurred. Try again')
			})
	}

	toggleTodo = (todo) => {
		this.props.store.dispatch(toggleTodo(todo.id))
		return API.saveTodoToggle(todo.id)
			.catch(() => {
				this.props.store.dispatch(toggleTodo(todo.id))
				alert('An error has occurred. Try again')
			})
	}

	removeTodo = (todo) => {
		this.props.store.dispatch(removeTodo(todo.id))
		return API.deleteTodo(todo.id)
			.catch(() => {
				this.props.store.dispatch(addTodo(todo))
				alert('An error has occurred. Try again')
			})
	}

	render() {
		return ( <
			div >
			<
			h1 > Todo List < /h1> <
			input type = 'text'
			placeholder = 'Add Todo'
			ref = {
				(input) => this.input = input
			}
			/> <
			button onClick = {
				this.addTodo
			} > Add Todo < /button>

			<
			List items = {
				this.props.todos
			}
			toggle = {
				this.toggleTodo
			}
			removeItem = {
				this.removeTodo
			}
			/> < /
			div >
		)
	}
}