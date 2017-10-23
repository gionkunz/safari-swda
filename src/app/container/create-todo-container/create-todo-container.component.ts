import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'swda-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css']
})
export class CreateTodoContainerComponent {
  constructor(@Inject(Router) private router: Router) {}

  createTodo(todoData: any) {
    this.router.navigate(['/todos']);
  }
}
