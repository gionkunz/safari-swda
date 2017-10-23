import {defaultTodoState, TodoState} from './state';
import {TodoActions} from './actions';

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

    case 'UpdateTodoAction':
      return {
        ...state,
        todoItems: state.todoItems.map((todoItem) => {
          if (todoItem.nr === action.todoNr) {
            return {
              ...todoItem,
              ...action.data
            };
          } else {
            return todoItem;
          }
        })
      };

    default: return state;
  }
}
