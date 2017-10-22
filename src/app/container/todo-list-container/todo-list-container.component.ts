import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'swda-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent {
  todoItems: TodoItem[];

  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router) {
    this.todoItems = todoService.getTodos();
  }

  markAsDone(todoItem: TodoItem) {
    this.todoService.updateTodo(todoItem.nr, {
      done: !todoItem.done
    });
    this.todoItems = this.todoService.getTodos();
  }

  showDetails(todoItem: TodoItem) {
    this.router.navigate(['/todos', todoItem.nr]);
  }
}
