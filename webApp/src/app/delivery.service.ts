import { Injectable, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService implements OnInit {

  someValue:Subject<string> = new Subject<string>();
  storedValue:string = '';
  constructor() { }
 
  ngOnInit()
  {
    console.log(this.storedValue);
  }
}
