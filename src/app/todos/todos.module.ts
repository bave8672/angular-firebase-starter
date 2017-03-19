import { SharedModule } from '../shared/shared.module';
import { DisplayTodoComponent } from './todo-display/todo-display.component';
import { TodosService } from './todos.service';
import { EditTodoComponent } from './todo-edit/todo-edit.component';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        TodoComponent,
        EditTodoComponent,
        DisplayTodoComponent
    ],
    providers : [
        TodosService
    ],
    exports: [
        TodoComponent,
        EditTodoComponent,
        DisplayTodoComponent
    ]
})

export class TodosModule {}
