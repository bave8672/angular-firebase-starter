import { Todo } from '../todo';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { minLength } from 'app/validators';
import { Messages } from 'app/resources/messages';
import { TodosActions } from 'app/account/state/todos/todos.actions';
import { AccountAppState } from 'app/account/state/store.config';
import { TypedFormGroup } from 'app/shared/forms/typedFormGroup';
import { TypedFormControl } from 'app/shared/forms/typedFormControl';

@Component({
    selector: 'app-todo-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo-edit.component.html',
})
export class EditTodoComponent {
    @Input() todo: Todo = new Todo();
    @Input() cancelable = true;

    formGroup = new TypedFormGroup({
        name: new TypedFormControl<string>(
            '',
            minLength(Messages.Validation.TodoNameMinLength)(1)
        ),
    });

    constructor(private state: Store<AccountAppState>) {}

    save() {
        if (this.formGroup.valid) {
            this.state.dispatch(
                new TodosActions.Update({
                    ...this.todo,
                    name: this.formGroup.value.name,
                })
            );
            this.formGroup.controls.name.reset('');
        }
    }

    cancel() {
        this.state.dispatch(new TodosActions.CloseEdit());
    }
}
