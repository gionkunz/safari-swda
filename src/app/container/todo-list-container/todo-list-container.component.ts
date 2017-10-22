import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'swda-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent {
  todoItems: TodoItem[];

  constructor(@Inject(TodoService) private todoService: TodoService) {
    this.todoItems = todoService.getTodos();
  }

  markAsDone(todoItem: TodoItem) {
    // TODO: Update todo item using TodoService
    // Since the container is now responsible for all data manipulation,
    // you need to remove all manipulation code from the TodoList component
    // and perform those operations here.
  }
}
