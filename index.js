// Reducer function
function todos(state = [], action) {

	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.todo])
		case 'REMOVE_TODO':
			return state.filter((todo) => todo.id !== action.id)
		case 'TOGGLE_TODO':
			return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, {
				complete: !todo.complete
			}))
		default:
			return state
	}

}

function createStore(reducer) {
	// The store should have four parts:
	// 1. The state.
	// 2. A way to get the state.
	// 3. A way to listen to changes on the state.
	// 4. A way to update the state.

	let state

	let listeners = []

	const getState = () => state

	const subscribe = (listener) => {
		listeners.push(listener)

		return () => {
			listeners = listeners.filter((l) => l !== listener)
		}
	}

	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach((listener) => listener())
	}

	return {
		getState,
		subscribe,
		dispatch,
	}
}