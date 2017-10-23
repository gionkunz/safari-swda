import {Component, Inject} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {TodoItem} from '../../model/todo';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../state/state';
import {ActivatedRoute, Router} from '@angular/router';
import {UpdateTodoAction} from '../../state/actions';

@Component({
  selector: 'swda-todo-details-container',
  templateUrl: './todo-details-container.component.html',
  styleUrls: ['./todo-details-container.component.css']
})
export class TodoDetailsContainerComponent {
  todoItem: Observable<TodoItem>;

  constructor(@Inject(Store) private store: Store<ApplicationState>,
              @Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute) {
    this.todoItem = route.params
      .switchMap((params) =>
        store.select((state) =>
          state.todo.todoItems
            .find((todo) => todo.nr === params.nr)
        )
      );
  }

  updateTodo(data: any) {
    this.route.params
      .take(1)
      .subscribe((params) => {
        this.store.dispatch(new UpdateTodoAction(params.nr, data));
        this.router.navigate(['/todos']);
      });
  }
}
