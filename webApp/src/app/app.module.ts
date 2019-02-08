import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormsComponent } from './forms/forms.component';

const routes:Routes = [
  {path:'',component:ParentComponent}
  ,{path:'forms',component:FormsComponent}
  ,{path:'observe',component:ObservablesComponent}
  ,{
    path:'home',component:HomeComponent,children:[
      {path:'freyja',component:SampleComponent},
      {path:'freyr',component:DirectivesComponent}
    ]
  }
  ,{path:'haha',component:LifecycleComponent}
  ,{path:'payCalc',component:PayCalcComponent}
  ,{path:'error',component:ErrorComponent}
  ,{path:'**',redirectTo:'error'}
];

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
    LifecycleComponent,
    MenuComponent,
    HomeComponent,
    ErrorComponent,
    ObservablesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
