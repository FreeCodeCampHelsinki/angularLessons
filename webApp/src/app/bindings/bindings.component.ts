import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  someVar:string = 'Tiki is so very cool!';
  isDisabled:boolean = false;

  doSomething()
  {
    
  }

  constructor() { }

  ngOnInit() {
    // let x:number;
    // this.someVar = '';
  }

}
