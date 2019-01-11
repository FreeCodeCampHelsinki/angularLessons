import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {SampleComponent} from './sample/monkey';
import { BindingsComponent } from './bindings/bindings.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PayCalcComponent } from './pay-calc/pay-calc.component';
import { PayViewComponent } from './pay-view/pay-view.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { DeliveryService } from './delivery.service';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SampleComponent,
    BindingsComponent,
    ParentComponent,
    ChildComponent,
    PayCalcComponent,
    PayViewComponent,
    DirectivesComponent,
    ServicesComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
