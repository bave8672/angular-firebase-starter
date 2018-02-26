import { GooglePlusAuthButtonComponent } from './google/google-plus-auth-button';
import { ModalComponent } from './modal/modal.component';
import { PanelComponent } from './panel/panel.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { IsLoggedInGuard } from 'app/shared/guards/isLoggedIn.guard';
import { IsNotLoggedInGuard } from 'app/shared/guards/isNotLoggedIn.guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
    ],
    declarations: [
        ModalComponent,
        ValidationMessageComponent,
        PanelComponent,
        SubmitButtonComponent,
        GooglePlusAuthButtonComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ModalComponent,
        ValidationMessageComponent,
        PanelComponent,
        SubmitButtonComponent,
        GooglePlusAuthButtonComponent,
    ],
    providers: [IsLoggedInGuard, IsNotLoggedInGuard],
})
export class SharedModule {}
