import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})

// interface tiki
// {
//   doSomething();
//   DoSomethingElse();
// }

export class LifecycleComponent implements OnInit,
                                          OnChanges,
                                          DoCheck,
                                          AfterContentInit,
                                          AfterContentChecked,
                                          AfterViewInit,
                                          AfterViewChecked,
                                          OnDestroy {

  constructor() 
  {
    console.log("Constructor called");
  }

  // doSomething()
  // {

  // }

  // DoSomethingElse()
  // {

  // }

  ngOnInit()
  {
    console.log('OnInit called');
  }

  ngOnChanges()
  {
    console.log("OnChanges called");
  }

  ngDoCheck()
  {
    console.log("DoCheck called");
  }

  ngAfterContentInit()
  {
    console.log("AfterContentInit checked");
  }

  ngAfterContentChecked()
  {
    console.log("AfterContentChecked called");
  }

  ngAfterViewInit()
  {
    console.log("AfterViewInit called");
  }

  ngAfterViewChecked()
  {
    console.log("AfterViewChecked called");
  }

  ngOnDestroy()
  {
    console.log("OnDestroy called");
  }
}
