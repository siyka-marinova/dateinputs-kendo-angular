import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { Http, HttpModule, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions, ResponseType } from '@angular/http';
import { Jsonp, JsonpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DataService }   from './data.service';
import { AppComponent }   from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateInputs';
import { RTL } from '@progress/kendo-angular-l10n';
import { EditService } from './edit.service';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    // ... and register it
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    FormsModule,
    JsonpModule
  ],
  bootstrap: [AppComponent],
  providers: [
        {
            deps: [Jsonp],
            provide: EditService,
            useFactory: (jsonp: Jsonp) => () => new EditService(jsonp)
        },
        // { provide: RTL, useValue: true }
  ]
})
export class AppModule { }
