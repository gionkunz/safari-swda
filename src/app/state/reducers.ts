import {defaultTodoState, TodoState} from './state';
import {CreateTodoAction, TodoActions} from './actions';

export function todoReducer(
  state: TodoState = defaultTodoState,
  action: TodoActions): TodoState {

  switch (action.type) {
    case 'CreateTodoAction':
      return {
        ...state,
        todoItems: [...state.todoItems, {
          nr: `${state.todoItems.length + 1}`,
          ...action.data
        }]
      };

    default: return state;
  }
}
