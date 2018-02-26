import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

export const DEFAULT_PHOTO_URL =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

@Component({
    selector: 'app-profile-picture',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<img alt="Profile Picture" class="img-rounded" [src]="src ? src : (photoUrl$ | async)" />`,
    styles: ['img { height: 3em; width: 3em; }'],
})
export class ProfilePictureComponent {
    @Input() src: string | undefined;
    photoUrl$ = this.auth.authState
        .filter(a => !!a)
        .map(a => a.photoURL || DEFAULT_PHOTO_URL);

    constructor(protected auth: AngularFireAuth) {}
}
