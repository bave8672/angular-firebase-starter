import { Todo } from '../todo';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AccountAppState } from 'app/account/state/store.config';

@Component({
    selector: 'app-todo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
    @Input() todo = new Todo();
    isEditing$: Observable<boolean>;

    constructor(private state: Store<AccountAppState>) {}

    ngOnInit() {
        this.isEditing$ = this.state.select(
            s =>
                !this.todo.uid ||
                !this.todo.name ||
                s.account.todos.editing === this.todo.uid
        );
    }
}
