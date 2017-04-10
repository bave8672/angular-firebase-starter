import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent {

    @Output() cancel = new EventEmitter<void>();

    @HostListener('document:keydown', ['$event'])
    onEscape(event: KeyboardEvent) {
        if (event.code === 'Escape' || event.code === 'Tab') {
            this.onCancel();
        }
    }

    onCancel() {
        this.cancel.emit();
    }
}
