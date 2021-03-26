import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { InteractionDadSonComponent } from './interaction-dad-son/interaction-dad-son.component';
import { ComponentSonComponent } from './component-son/component-son.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InteractionDadSonComponent,
    ComponentSonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
