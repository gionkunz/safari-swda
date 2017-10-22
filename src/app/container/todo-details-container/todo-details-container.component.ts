import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'swda-todo-details-container',
  templateUrl: './todo-details-container.component.html',
  styleUrls: ['./todo-details-container.component.css']
})
export class TodoDetailsContainerComponent {
  todoItem: TodoItem;

  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute) {
    route.params
      .subscribe((params) => {
        this.todoItem = this.todoService.getTodo(params.nr);
      });
  }

  updateTodo(data: any) {
    this.todoService.updateTodo(this.route.snapshot.params.nr, data);
    this.router.navigate(['/todos']);
  }
}
