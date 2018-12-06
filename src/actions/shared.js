export const RECEIVE_ACTION = 'RECEIVE_ACTION';

export function receiveData(todos, goals) {
  return {
    type: RECEIVE_ACTION,
    todos,
    goals,
  };
}
