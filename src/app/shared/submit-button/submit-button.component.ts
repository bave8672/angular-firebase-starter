import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-submit-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './submit-button.component.html'
})

export class SubmitButtonComponent {
    @Input() requesting = false;
    @Input() disabled = false;
    @Input() buttonState = 'default';
    @Input() extraClasses = '';
    @Input() requestingText = '';
}
