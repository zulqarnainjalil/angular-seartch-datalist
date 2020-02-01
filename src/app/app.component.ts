import {Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

text:string='';
options =['Internet Explorer','Firefox','Chrome','Opera','Safari'];
show=this.options;
  editName(): void {
    this.show= this.options.filter(x=>x.includes(this.text)); 
  }
}
