import {Component, Inject} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {TodoItem} from '../../model/todo';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'swda-todo-details-container',
  templateUrl: './todo-details-container.component.html',
  styleUrls: ['./todo-details-container.component.css']
})
export class TodoDetailsContainerComponent {
  todoItem: Observable<TodoItem>;

  constructor(@Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute) {
    this.todoItem = route.params
      .switchMap((params) => (<any>{}));
  }

  updateTodo(data: any) {
    this.route.params
      .take(1)
      .subscribe((params) => {
        this.router.navigate(['/todos']);
      });
  }
}
