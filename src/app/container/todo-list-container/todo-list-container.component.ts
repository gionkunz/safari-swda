import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Observable} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../state/state';
import {UpdateTodoAction} from '../../state/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'swda-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent {
  todoItems: Observable<TodoItem[]>;

  constructor(@Inject(Store) private store: Store<ApplicationState>,
              @Inject(Router) private router: Router) {
    this.todoItems = store.select((state) => state.todo.todoItems);
  }

  markAsDone(todoItem: TodoItem) {
    this.store.dispatch(new UpdateTodoAction(todoItem.nr, {
      done: !todoItem.done
    }));
  }

  showDetails(todoItem: TodoItem) {
    this.router.navigate(['/todos', todoItem.nr]);
  }
}
