import { StateService } from '../../store/state-service/state.service';
import { Todo } from '../todo';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-todo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {

    @Input() todo = new Todo();
    isEditing$: Observable<boolean>;

    constructor(private state: StateService) {}

    ngOnInit() {
        this.isEditing$ = this.state.select(s =>
            !this.todo.uid ||
            !this.todo.name ||
            s.todos.editing === this.todo.uid);
    }
}
