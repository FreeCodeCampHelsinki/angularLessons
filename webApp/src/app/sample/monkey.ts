import { Component, OnChanges } from "@angular/core";
import { DeliveryService } from "../delivery.service";

@Component({
    selector:'blah',
    templateUrl:'./donkey.html'
})

export class SampleComponent implements OnChanges
{
    output:string;

    constructor(private service:DeliveryService){}

    ngOnChanges()
    {
        this.output = this.service.storedValue;
    }
}