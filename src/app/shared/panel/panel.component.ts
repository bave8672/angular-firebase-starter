import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-panel',
    templateUrl: 'panel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PanelComponent {
    @Input() state = 'default';
    @Input() title: string | undefined;
}
