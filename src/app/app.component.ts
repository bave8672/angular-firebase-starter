import { StatefulClass } from './helpers/statefulClass';
import { Component, OnInit } from '@angular/core';
import { GlobalActions } from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends StatefulClass implements OnInit {

    ngOnInit() {
        this.state.dispatch(new GlobalActions.AppStart());
    }
}
