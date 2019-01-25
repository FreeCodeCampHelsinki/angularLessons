import { Component, OnInit } from '@angular/core';
//import { Observable,Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor(private httpObj:HttpClient, private ds:DeliveryService) { }

  ngOnInit() {
    this.httpObj.get("assets/info.txt")
    .subscribe((success)=>{
      console.log(success['lause']);
    },(fail)=>{
      console.log(fail);
    },()=>{
      console.log("I'm done");
    });
  }

  doClick()
  {
    this.ds.someValue.next("Tiki Application");
  }
  
}
