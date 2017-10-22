import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

// TODO: Add change detection strategy OnPush
@Component({
  selector: 'swda-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem;
  @Output() onMarkAsDone = new EventEmitter<TodoItem>();
  @Output() onShowDetails = new EventEmitter<TodoItem>();

  markAsDone() {
    this.onMarkAsDone.emit(this.todoItem);
  }

  @HostListener('click')
  showDetails() {
    this.onShowDetails.emit(this.todoItem);
  }
}
