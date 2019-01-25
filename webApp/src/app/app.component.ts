import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import { DeliveryService } from './delivery.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ape-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'app';
  passer:{};

  subscription:Subscription;

  constructor(private ds:DeliveryService){}

  ngOnInit()
  {
    this.subscription = this.ds.someValue.subscribe((x)=>{
      this.title = x;
    });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  doOutData(e)
  {
    this.passer = e;
  }
}
