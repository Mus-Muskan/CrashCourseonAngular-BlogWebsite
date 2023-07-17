import { Component } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'], 
  providers:[FetchService]
})
export class BlogsComponent {

blogs:string[]=[];

printblogs(){
  this.blogs=this.fservice.getblogs();
}

constructor(private fservice:FetchService){}

}
