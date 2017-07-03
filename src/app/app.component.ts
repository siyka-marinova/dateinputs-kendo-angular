import { Component, Inject, ViewChild, Input } from '@angular/core';
import { Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { DataService } from './data.service';
import { DateInputsModule } from '@progress/kendo-angular-dateInputs';
import { Product } from './products';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditService } from './edit.service';

export interface User {
    age: Number;
}

@Component({
  selector: 'app-root',
  styles: [ '.k-calendar { margin: 0 auto; }' ],
  template: `
        <kendo-calendar></kendo-calendar>
        <div class="example-wrapper" style="min-height: 400px;">
                <div class="col-xs-12 col-sm-6 example-col">
                    <p>DateInput</p>
                    <kendo-dateinput [value]="value"></kendo-dateinput>
                </div>

                <div class="col-xs-12 col-sm-6 example-col">
                    <p>Calendar</p>
                    <kendo-calendar
                        [value]="value"
                        [focusedDate]="focusedDate"
                    >
                    </kendo-calendar>
                </div>

                <div class="example-wrapper">
                    <p>Select a date:</p>
                    <kendo-dateinput
                        [(value)]="value"
                    ></kendo-dateinput>
                </div>

            <div>
                    <kendo-switch [(ngModel)]="checked" (valueChange)="change($event)"></kendo-switch>
            </div>
           
            <div class="example-wrapper" style="min-height: 400px; padding-top:300px;" [ngStyle]="{'padding-top': distance}">
                <p>Select a date:</p>
                <kendo-datepicker
                    [(value)]="value"
                ></kendo-datepicker>
                <p>(use Alt+↓ to open the calendar, ← and →  to navigate, ↑ to increment and ↓ to decrement the value)</p>
            </div>
        </div>
  `
})

export class AppComponent {
   public value: Date = new Date();
   public distance = '500px';
   public focusedDate: Date = new Date(2017, 5, 6);
   public checked: boolean = true;
   
   public change(e) {
      console.log("CHANGE",e)
    }
}