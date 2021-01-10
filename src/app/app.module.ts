import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { ControlsComponent } from './components/controls/controls.component';
import { LapsComponent } from './components/laps/laps.component';
import { PaddzeroPipe } from './shared/paddzero.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ControlsComponent,
    LapsComponent,
    PaddzeroPipe,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
