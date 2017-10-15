import {defaultTodoState, TodoState} from './state';
import {TodoActions} from './actions';
import {listToMap} from '../util/util';

export function todoReducer(
  state: TodoState = defaultTodoState,
  action: TodoActions): TodoState {

  switch (action.type) {
    case 'LoadAllTodosSuccessAction':
      return {
        ...state,
        todoMap: listToMap(action.todoItems, 'nr')
      };

    case 'CreateTodoSuccessAction':
    case 'UpdateTodoSuccessAction':
      return {
        ...state,
        todoMap: {
          ...state.todoMap,
          [action.todoItem.nr]: action.todoItem
        }
      };

    default: return state;
  }
}
