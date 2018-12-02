{
	type: 'ADD_TODO',
	todo: {
		id: 0,
		name: 'Wash dishes',
		completed: false
	}
}

{
	type: 'REMOVE_TODO',
	id: 0
}

{
	type: 'TOGGLE_TODO',
	id: 0
}

{
	type: 'ADD_GOAL',
	id: 0
}

{
	type: 'REMOVE_GOAL',
	id: 0
}

// Reducer function
function todos(state = [], action) {
	if (action.type == 'ADD_TODO') {
		return state.concat([action.todo])
	}

	return state
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