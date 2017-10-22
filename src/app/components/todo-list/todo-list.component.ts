import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'swda-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // TODO: Use input and output in simple UI components
  // Make this property an Input property using the @Input decorator
  // You can then bind the todos from the TodoListContainer component
  // onto this input.
  todoItems: TodoItem[];
  @Output() onMarkAsDone = new EventEmitter<TodoItem>();

  // TODO: No dependencies in simple UI components
  // Since we're no longer manipulating data within our TodoList UI
  // component, we don't need the TodoService here anymore
  constructor(@Inject(TodoService) private todoService: TodoService) {
    this.todoItems = todoService.getTodos();
  }

  markAsDone(todoItem: TodoItem) {
    // TODO: Use onMarkAsDone output instead
    // Our TodoList should be a simple UI component .We'd like to
    // use the output onMarkAsDone to emit an event instead of
    // doing data manipulation directly.
    this.todoService.updateTodo(todoItem.nr, {
      done: !todoItem.done
    });
    this.todoItems = this.todoService.getTodos();
  }
}
