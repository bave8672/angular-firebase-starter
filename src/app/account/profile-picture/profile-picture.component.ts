import { AuthProviders } from 'angularfire2/auth';
import { ChangeDetectionStrategy, Component, Input, style } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'app-account-profile-picture',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<img alt="Profile Picture" class="img-rounded" [src]="src ? src : (photoUrl$ | async)" />`,
    styles: ['img { height: 3em; width: 3em; }']
})

export class ProfilePictureComponent {

    @Input() src: string | undefined;
    readonly defaultUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

    photoUrl$ = this.firebase.auth.filter(a => !!a)
        .map(a => {
            switch (a.provider) {
                case AuthProviders.Password:
                    return a.auth.photoURL;
                case AuthProviders.Google:
                    return a.google ? a.google.photoURL : this.defaultUrl;
                default:
                    return this.defaultUrl;
            }
        });

    constructor(
        protected firebase: AngularFire
    ) {}
}
