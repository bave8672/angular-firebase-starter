import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
