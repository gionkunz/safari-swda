import {Component, Inject} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {TodoItem} from '../../model/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'swda-todo-details-container',
  templateUrl: './todo-details-container.component.html',
  styleUrls: ['./todo-details-container.component.css']
})
export class TodoDetailsContainerComponent {
  todoItem: Observable<TodoItem>;

  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute) {
    this.todoItem = route.params
      .switchMap((params) => todoService.loadTodo(params.nr));
  }

  updateTodo(data: any) {
    this.route.params
      .take(1)
      .switchMap((params) => this.todoService.updateTodo(params.nr, data))
      .subscribe(() => this.router.navigate(['/todos']));
  }
}
