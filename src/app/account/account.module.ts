import { SharedModule } from '../shared/shared.module';
import { ProfilePageComponent } from './profile/profile-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from 'app/account/routing/accountRouting.module';
import { TodosModule } from 'app/account/todos/todos.module';
import { AccountSharedModule } from 'app/account/shared/accountShared.module';

@NgModule({
    imports: [
        SharedModule,
        AccountSharedModule,
        TodosModule,
        AccountRoutingModule,
    ],
    declarations: [ProfilePageComponent],
})
export class AccountModule {}
