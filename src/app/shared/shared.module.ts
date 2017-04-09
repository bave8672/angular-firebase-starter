import { GooglePlusAuthButtonComponent } from './google/google-plus-auth-button';
import { ModalComponent } from './modal/modal.component';
import { OutletComponent } from './outlet/outlet.component';
import { PanelComponent } from './panel/panel.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ModalComponent,
        ValidationMessageComponent,
        OutletComponent,
        PanelComponent,
        SubmitButtonComponent,
        GooglePlusAuthButtonComponent
    ],
    exports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ModalComponent,
        ValidationMessageComponent,
        OutletComponent,
        PanelComponent,
        SubmitButtonComponent,
        GooglePlusAuthButtonComponent
    ]
})

export class SharedModule {}
