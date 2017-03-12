import { TodosService } from './todos.service';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        TodoComponent,
        EditTodoComponent
    ],
    providers : [
        TodosService
    ],
    exports: [
        TodoComponent,
        EditTodoComponent
    ]
})

export class TodosModule {}
