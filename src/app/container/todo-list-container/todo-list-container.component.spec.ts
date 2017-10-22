import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoListContainerComponent} from './todo-list-container.component';
import {TodoItemComponent} from '../../components/todo-item/todo-item.component';
import {By} from '@angular/platform-browser';
import {TodoItem} from '../../model/todo';
import {TodoService} from '../../service/todo.service';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from '../../components/todo-list/todo-list.component';

class TodoServiceMock extends TodoService {
  todos: TodoItem[] = [{
    nr: '1',
    title: 'Todo 1',
    description: 'Todo 1 Description',
    done: true
  }, {
    nr: '2',
    title: 'Todo 2',
    description: 'Todo 2 Description',
    done: false
  }];

  getTodos() {
    return this.todos;
  }

  updateTodo(nr: string, data: any): void {
    const index = this.todos.findIndex((todo) => todo.nr === nr);
    if (index !== -1) {
      Object.assign(this.todos[index], data);
    }
  }
}

describe('TodoListContainer', () => {
  let component: TodoListContainerComponent;
  let fixture: ComponentFixture<TodoListContainerComponent>;
  let todoServiceMock: TodoServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([], {
          useHash: true
        })
      ],
      declarations: [
        TodoListContainerComponent,
        TodoListComponent,
        TodoItemComponent
      ],
      providers: [{
        provide: TodoService,
        useClass: TodoServiceMock
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoServiceMock = fixture.componentRef.injector.get(TodoService);
  });

  it('should render two items', () => {
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
    expect(todoItems.length).toBe(2);
  });

  it('should update done state when item checkbox is clicked', () => {
    // TODO: Obtain the debug element of the checkbox rendered by the second TODO item
    // By using fixture.debugElement.queryAll you can search for DebugElements
    // in the component tree.
    // Use the predicate builder `By` to search using CSS selectors or by Directives
    // fixture.debugElement.queryAll(By.directive(TodoItemComponent))
    // fixture.debugElement.queryAll(By.css('.element-class'))

    // TODO: Trigger a click event on the checkbox debug element
    // You can trigger events using the `triggerEventHandler` function on a debug
    // element. i.E. debugElement.triggerEventHandler('click', null);

    // TODO: Assert on the state in the TodoService mock
  });
});
