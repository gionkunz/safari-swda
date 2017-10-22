import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

// TODO: Add change detection strategy OnPush
@Component({
  selector: 'swda-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoItems: TodoItem[];
  @Output() onMarkAsDone = new EventEmitter<TodoItem>();
  @Output() onShowDetails = new EventEmitter<TodoItem>();

  markAsDone(todoItem: TodoItem) {
    this.onMarkAsDone.emit(todoItem);
  }

  showDetails(todoItem: TodoItem) {
    this.onShowDetails.emit(todoItem);
  }

  trackByNr(index: number, todoItem: TodoItem) {
    return todoItem.nr;
  }
}
