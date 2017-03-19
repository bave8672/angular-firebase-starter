import { TodosService } from '../../todos/todos.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
    templateUrl: './profile-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {

    todos$ = this.todosService.todos();

    constructor(private todosService: TodosService) {}
}
