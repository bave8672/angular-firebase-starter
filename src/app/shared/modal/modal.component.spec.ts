import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should emit a close attempt event WHEN a click is intercepted on the backdrop element', () => {
        spyOn(fixture.componentInstance.cancel, 'emit');
        (fixture.nativeElement as HTMLElement)
            .querySelector('.modal-open')
            .dispatchEvent(new MouseEvent('click'));
        expect(fixture.componentInstance.cancel.emit)
            .toHaveBeenCalled();
    });

    it('should emit a close attempt event WHEN an escape is intercepted on the backdrop element', () => {
        spyOn(fixture.componentInstance.cancel, 'emit');
        (fixture.nativeElement as HTMLElement)
            .dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape', bubbles: true }));
        expect(fixture.componentInstance.cancel.emit)
            .toHaveBeenCalled();
    });

    it('should emit a close attempt event WHEN an enter is intercepted on the backdrop element', () => {
        spyOn(fixture.componentInstance.cancel, 'emit');
        (fixture.nativeElement as HTMLElement)
            .dispatchEvent(new KeyboardEvent('keydown', { code: 'Tab', bubbles: true }));
        expect(fixture.componentInstance.cancel.emit)
            .toHaveBeenCalled();
    });
});
