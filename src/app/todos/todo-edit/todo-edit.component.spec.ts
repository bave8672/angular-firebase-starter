import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { StateService } from '../../store/state-service/state.service';
import { AppState, DefaultAppState, TodosActions } from '../../store';
import { EditTodoComponent } from './todo-edit.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { assignDeep } from '../../helpers';

describe('Todo Edit Component', () => {
    let component: EditTodoComponent;
    let fixture: ComponentFixture<EditTodoComponent>;
    let todo: Todo;

    class MockStateService {
        dispatch() {}
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [EditTodoComponent],
            providers: [
                FormBuilder,
                { provide: StateService, useClass: MockStateService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        todo = new Todo();
        todo.name = 'Feed the cats';
        todo.uid = '123';
        fixture = TestBed.createComponent(EditTodoComponent);
        component = fixture.componentInstance;
        component.todo = todo;
        fixture.detectChanges();
    });

    it('emits the cancel action WHEN cancel button is clicked', () => {
        spyOn(MockStateService.prototype, 'dispatch');
        (fixture.nativeElement as HTMLElement)
            .querySelector('[data-e2e="todo-edit-cancel"]')
            .dispatchEvent(new MouseEvent('click'));
        expect(MockStateService.prototype.dispatch)
            .toHaveBeenCalledWith(new TodosActions.CloseEdit());
    });
});
