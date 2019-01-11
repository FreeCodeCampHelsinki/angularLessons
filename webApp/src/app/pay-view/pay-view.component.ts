import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pay-view',
  templateUrl: './pay-view.component.html',
  styleUrls: ['./pay-view.component.css']
})
export class PayViewComponent implements OnChanges {

  @Input('inData') blahData:{} = {};
  grossPay:number = 0.0;
  taxPay:number = 0.0;
  nettPay:number = 0.0;

  constructor() { }

  ngOnChanges() {
    console.log(this.blahData);
    switch(this.blahData['role'])
    {
      case "staff":
        this.nettPay = this.blahData['numHours'] * 16.5;
      break;
      case "super":
        this.nettPay = this.blahData['numHours'] * 35;
      break;
      case "mgr":
        this.nettPay = this.blahData['numHours'] * 70;
      break;
    }

    this.taxPay = this.nettPay * 0.4;
    this.nettPay = this.grossPay - this.taxPay;
  }

}
