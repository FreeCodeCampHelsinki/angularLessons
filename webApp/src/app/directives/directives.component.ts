import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  boolVal = true;
  fruits:string[] = ['Apples','Pears','Bananas','Durians'];

  people = [{name:'Tiki',age:46},{name:'Pekka',age:32},{name:'Umer',age:23}];

  countries = ['Afghanistan','Pakistan','Goheadgostan']

  constructor() { }

  ngOnInit() {
  }

  doColor()
  {
    if(this.boolVal)
    {
      return 'red';
    }
    else
    {
      return 'green';
    }
  }

}
