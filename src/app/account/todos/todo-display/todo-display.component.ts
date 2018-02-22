import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Todo } from '../todo';
import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';
import { TodosActions } from 'app/account/todos/state/todos.actions';

@Component({
    selector: 'app-todo-display',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo-display.component.html'
})

export class DisplayTodoComponent {

    @Input() todo = new Todo();

    constructor(private state: Store<AccountAppState>) {}

    edit() {
        this.state.dispatch(new TodosActions.Edit(this.todo.uid));
    }

    delete() {
        if (this.todo.uid) {
            this.state.dispatch(new TodosActions.Delete(this.todo.uid));
        }
    }
}
