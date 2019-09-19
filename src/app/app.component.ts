import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cal';
  result
  n1
  n2
  add()
   {
    this.result = +this.n1 + +this.n2
  }
  sub() 
  {
    this.result = +this.n1 - +this.n2 
  }
  mul()
   {
    this.result = +this.n1 * +this.n2 
     }
  div() 
  {
    this.result = +this.n1 / +this.n2 
  }
}


