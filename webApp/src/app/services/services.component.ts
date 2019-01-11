import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private tiki:DeliveryService) { }

  ngOnInit() {
    this.tiki.storedValue = 'Tiki is so very sexy!';
  }

}
