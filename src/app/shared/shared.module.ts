import { RouterModule } from '@angular/router';
import { OutletComponent } from './outlet/outlet.component';
import { ModalComponent } from './modal/modal.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { NgModule } from '@angular/core';

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
        OutletComponent
    ],
    exports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ModalComponent,
        ValidationMessageComponent,
        OutletComponent
    ]
})

export class SharedModule {}
