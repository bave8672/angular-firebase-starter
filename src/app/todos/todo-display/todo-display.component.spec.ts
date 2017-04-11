// import { Todo } from '../todo';
// import { StateService } from '../../store/state-service/state.service';
// import { AppState, DefaultAppState, TodosActions } from '../../store';
// import { DisplayTodoComponent } from './todo-display.component';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Observable } from 'rxjs/Observable';
// import { assignDeep } from '../../helpers';

// describe('todo-display', () => {
//     let component: DisplayTodoComponent;
//     let fixture: ComponentFixture<DisplayTodoComponent>;
//     let todo: Todo;

//     class MockStateService {
//         dispatch() {}
//     }

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [DisplayTodoComponent],
//             providers: [
//                 { provide: StateService, useClass: MockStateService }
//             ]
//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         todo = new Todo();
//         todo.name = 'Feed the cats';
//         todo.uid = '123';
//         fixture = TestBed.createComponent(DisplayTodoComponent);
//         component = fixture.componentInstance;
//         component.todo = todo;
//         fixture.detectChanges();
//     });

//     it('emits the edit action with it\'s todo uid WHEN the todo is clicked', (done) => {
//         spyOn(MockStateService.prototype, 'dispatch');
//         (fixture.nativeElement as HTMLElement)
//             .querySelector('[data-e2e="todo-name-123"]')
//             .dispatchEvent(new MouseEvent('click'));
//         expect(MockStateService.prototype.dispatch)
//             .toHaveBeenCalledWith(new TodosActions.Edit('123'));
//             done();
//     });

//     it('emits the delte action with it\'s todo uid WHEN delete button is clicked', (done) => {
//         spyOn(MockStateService.prototype, 'dispatch');
//         (fixture.nativeElement as HTMLElement)
//             .querySelector('[data-e2e="delete-todo-123"]')
//             .dispatchEvent(new MouseEvent('click'));
//         expect(MockStateService.prototype.dispatch)
//             .toHaveBeenCalledWith(new TodosActions.Delete('123'));
//             done();
//     });
// });
