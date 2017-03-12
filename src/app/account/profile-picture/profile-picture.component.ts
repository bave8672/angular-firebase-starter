import { StatefulClass } from '../../helpers/statefulClass';
import { ChangeDetectionStrategy, Component, Input, style } from '@angular/core';

@Component({
    selector: 'account-profile-picture',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<img alt="Profile Picture" class="img-rounded" [src]="src ? src : (photoUrl$ | async)" />`,
    styles: ['img { height: 3em; width: 3em; }']
})

export class ProfilePictureComponent extends StatefulClass {

    @Input() src: string | undefined;

    photoUrl$ = this.firebase.auth.filter(a => !!a)
        .map(a => a.auth.photoURL);
}
