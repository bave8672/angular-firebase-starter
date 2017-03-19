import { StateService } from './store/state-service/state.service';
import { Component, OnInit } from '@angular/core';
import { GlobalActions } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private state: StateService
    ) {}

    ngOnInit() {
        this.state.dispatch(new GlobalActions.AppStart());
    }
}
