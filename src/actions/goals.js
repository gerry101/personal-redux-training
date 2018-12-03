export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

export function addGoal(goal) {
	return {
		type: ADD_GOAL,
		goal,
	}
}

export function removeGoal(id) {
	return {
		type: REMOVE_GOAL,
		id,
	}
}