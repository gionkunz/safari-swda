import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'swda-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css']
})
export class CreateTodoContainerComponent {
  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router) {}

  createTodo(todoData: any) {
    this.todoService.createTodo(todoData);
    this.router.navigate(['/todos']);
  }
}
