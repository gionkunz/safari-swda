import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'swda-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todoItem: TodoItem;
  @Input() applyButtonText: string;
  @Output() onApplyChanges = new EventEmitter<any>();

  applyChanges(title: string, description: string) {
    this.onApplyChanges.emit({
      title,
      description
    });
  }
}
