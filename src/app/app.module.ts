import 'rxjs/Rx';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TodoItemComponent} from './components/todo-item/todo-item.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoDetailsComponent} from './components/todo-details/todo-details.component';
import {TodoListContainerComponent} from './container/todo-list-container/todo-list-container.component';
import {TodoDetailsContainerComponent} from './container/todo-details-container/todo-details-container.component';
import {HttpModule} from '@angular/http';
import {TodoService} from './service/todo.service';
import {RouterModule} from '@angular/router';
import {CreateTodoContainerComponent} from './container/create-todo-container/create-todo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoListContainerComponent,
    TodoDetailsContainerComponent,
    CreateTodoContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'todos',
      component: TodoListContainerComponent
    }, {
      path: 'todos/:nr',
      component: TodoDetailsContainerComponent
    }, {
      path: 'create-todo',
      component: CreateTodoContainerComponent
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: '/todos'
    }])
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
