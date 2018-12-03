export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo(todo) {
	return {
		type: ADD_TODO,
		todo,
	}
}

export function removeTodo(id) {
	return {
		type: REMOVE_TODO,
		id,
	}
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id,
	}
}