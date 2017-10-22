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

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoListContainerComponent,
    TodoDetailsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'todos',
      component: TodoListContainerComponent
    }
      // TODO: Add new route to todo details view
      // Add a new route config here to route to the details view component
      // Use a route parameter in the path to reflect the todo nr state
      // path: 'todos/:nr'
      // The new route should be associated to the TodoDetailsContainerComponent
    , {
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
