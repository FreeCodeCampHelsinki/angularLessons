import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('passit') exposedToTheParent:{name:string,age:number}; //= {name:'Tiki', age:45};

  @Output('someEvent') passToParent:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  childDoSomething(e)
  {
    //console.log(e);
    this.passToParent.emit("Tiki is so VERY cool!");
  }

}
