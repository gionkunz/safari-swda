import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'swda-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoItems: TodoItem[];
  @Output() onMarkAsDone = new EventEmitter<TodoItem>();

  markAsDone(todoItem: TodoItem) {
    this.onMarkAsDone.emit(todoItem);
  }
}
