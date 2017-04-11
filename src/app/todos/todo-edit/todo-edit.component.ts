import { assign } from '../../helpers/assign';
import { FormComponent } from '../../helpers/form.component';
import { Messages } from '../../resources/messages';
import { TodosActions } from '../../store';
import { StateService } from '../../store/state-service/state.service';
import { minLength } from '../../validators';
import { Todo } from '../todo';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-todo-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo-edit.component.html'
})

export class EditTodoComponent extends FormComponent implements OnInit {

    @Input() todo: Todo = new Todo();
    @Input() cancelable = true;

    controlNames = {
        name: 'name'
    };

    formGroup;

    constructor(
        private state: StateService,
        private formBuilder: FormBuilder
    ) {
        super();
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.name]: [this.todo.name, minLength(Messages.Validation.TodoNameMinLength)(1)]
        });
    }

    save() {
        if (this.formGroup.valid) {
            this.state.dispatch(new TodosActions.Update(assign(this.todo, {
                name: this.getFormValue(this.controlNames.name)
            })));
            this.formGroup.controls[this.controlNames.name].setValue('');
            this.formGroup.controls[this.controlNames.name].reset();
        }
    }

    cancel() {
        this.state.dispatch(new TodosActions.CloseEdit());
    }
}
