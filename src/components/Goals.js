import React from 'react'
import API from 'goals-todos-api'

import {
	addGoal,
	removeGoal,
} from '../actions/goals'
import List from './List'

export default class Goals extends React.Component {
	addGoal = (e) => {
		e.preventDefault()
		const name = this.input.value

		return API.saveGoal(name)
			.then((goal) => {
				this.props.store.dispatch(addGoal(goal))
				this.input.value = ''
			})
			.catch(() => {
				alert('An error has occurred. Try again')
			})
	}

	removeGoal = (goal) => {
		this.props.store.dispatch(removeGoal(goal.id))
		return API.deleteGoal(goal.id)
			.catch(() => {
				this.props.store.dispatch(addGoal(goal))
				alert('An error has occurred. Try again.')
			})
	}

	render() {
		return ( <
			div >
			<
			h1 > Goals < /h1> <
			input type = 'text'
			placeholder = 'Add Goal'
			ref = {
				(input) => this.input = input
			}
			/> <
			button onClick = {
				this.addGoal
			} > Add Goal < /button>

			<
			List items = {
				this.props.goals
			}
			removeItem = {
				this.removeGoal
			}
			/> < /
			div >
		)
	}
}