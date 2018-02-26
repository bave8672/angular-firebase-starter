import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TodosService } from 'app/account/todos/todos.service';

@Component({
    templateUrl: './profile-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {

    todos$ = this.todosService.todos().valueChanges();

    constructor(private todosService: TodosService) {}
}
