import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-outlet',
    template: '<router-outlet></router-outlet>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutletComponent {}
