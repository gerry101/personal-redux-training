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

function createStore() {
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
			listeners.filter((l) => l !== listener)
		}
	}

	return {
		getState,
		subscribe,
	}
}