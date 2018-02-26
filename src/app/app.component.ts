import { Component, OnInit } from '@angular/core';
import { GlobalActions } from 'app/store/global/global.actions';

import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy } from '@angular/core';
import { AppState } from 'app/store/app.state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    constructor(private state: Store<AppState>) {}

    ngOnInit() {
        this.state.dispatch(new GlobalActions.AppStart());
    }
}
