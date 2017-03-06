import { StatefulClass } from '../../helpers/statefulClass';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
    templateUrl: './profile-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent extends StatefulClass implements OnInit {

    ngOnInit() {
        // todo
    }
}
