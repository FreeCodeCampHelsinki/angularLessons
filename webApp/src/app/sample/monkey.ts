import { Component, OnChanges,OnInit } from "@angular/core";
import { DeliveryService } from "../delivery.service";

@Component({
    selector:'blah',
    templateUrl:'./donkey.html'
})

export class SampleComponent implements OnInit,OnChanges
{
    output:string;

    constructor(private service:DeliveryService){}

    ngOnInit()
    {
        this.service.someValue.subscribe(
            (x)=>{
                console.log("Inside SampleComponent: " + x);
            }
        );
    }

    ngOnChanges()
    {
        this.output = this.service.storedValue;
    }
}