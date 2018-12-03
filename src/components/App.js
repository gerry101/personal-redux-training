import React from 'react'
import API from 'goals-todos-api'

import Goals from './Goals'
import Todos from './Todos'
import {
	receiveData,
} from '../actions/shared'

export default class App extends React.Component {
	componentDidMount() {
		Promise.all([
				API.fetchTodos(),
				API.fetchGoals(),
			])
			.then(([todos, goals]) => {
				this.props.store.dispatch(receiveData(todos, goals))
			})

		this.props.store.subscribe(() => this.forceUpdate())
	}

	render() {
		const {
			store
		} = this.props
		const {
			todos,
			goals,
			loading
		} = store.getState()

		if (loading) {
			return <h3 > < em > loading... < /em></h3 >
		}

		return ( <
			div > <
			Todos store = {
				store
			}
			todos = {
				todos
			}
			/> <
			Goals store = {
				store
			}
			goals = {
				goals
			}
			/> < /
			div >
		)
	}
}