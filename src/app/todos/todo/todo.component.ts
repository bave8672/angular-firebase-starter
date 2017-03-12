import { Todo } from '../todo';
import { FormComponent } from '../../helpers/form.component';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'todo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo.component.html'
})

export class TodoComponent {
    @Input() todo: Todo = new Todo();
}
