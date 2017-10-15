import {Component, Inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../state/state';
import {Router} from '@angular/router';
import {CreateTodoAction} from '../../state/actions';

@Component({
  selector: 'swda-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css']
})
export class CreateTodoContainerComponent {
  constructor(@Inject(Store) private store: Store<ApplicationState>,
              @Inject(Router) private router: Router) {}

  createTodo(todoData: any) {
    this.store.dispatch(new CreateTodoAction(todoData));
    this.router.navigate(['/todos']);
  }
}
