import { Injectable, OnChanges, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService implements OnInit {

  storedValue:string = '';
  constructor() { }
 
  ngOnInit()
  {
    console.log(this.storedValue);
  }
}
