import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pay-calc',
  templateUrl: './pay-calc.component.html',
  styleUrls: ['./pay-calc.component.css']
})
export class PayCalcComponent implements OnInit {

  hourVal:number = 0;
  currentRole:string = 'staff';

  @Output() outData:EventEmitter<{numHours:number,role:string}> = new EventEmitter<{numHours:number,role:string}>()

  constructor() { }

  ngOnInit() {
  }

  roleChange(e)
  {
    this.currentRole = e.value;
  }

  doCalculate()
  {
    this.outData.emit({numHours:this.hourVal,role:this.currentRole});
  }
}
