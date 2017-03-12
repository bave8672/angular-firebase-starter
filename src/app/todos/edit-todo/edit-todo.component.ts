import { assign } from '../../helpers/assign';
import { Messages } from '../../resources/messages';
import { minLength } from '../../validators';
import { FormComponent } from '../../helpers/form.component';
import { Todo } from '../todo';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodosActions } from '../../store';

@Component({
    selector: 'todo-edit',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './edit-todo.component.html'
})

export class EditTodoComponent extends FormComponent {

    @Input() todo: Todo = new Todo();

    controlNames = {
        name: 'name'
    };

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            [this.controlNames.name]: [this.todo.name, minLength(Messages.Validation.TodoNameMinLength)(1)]
        });
    }

    save() {
        this.state.dispatch(new TodosActions.Update(assign(this.todo, {
            name: this.getFormValue(this.controlNames.name)
        })));
    }

    close() {
        this.state.dispatch(new TodosActions.CloseEdit(this.todo.uid));
    }
}
