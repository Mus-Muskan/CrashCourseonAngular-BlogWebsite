import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css',]
})
export class DemoComponent {

  name = "";

  Reset(){
    this.name="";
  }

  product = "" ;
  Products:string[]=["Podcast" ];

  addProduct(){
    this.Products.push(this.product);
  }
newLaunch=false;
  onLaunch(){
    this.newLaunch=true;
  }
}
