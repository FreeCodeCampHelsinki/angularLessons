import { Component } from '@angular/core';

@Component({
  selector: 'ape-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  passer:{};

  doOutData(e)
  {
    this.passer = e;
  }
}
