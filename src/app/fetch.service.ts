import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  Blogs=['Introduction to ML', '10 Ways to style your outfits' , 'Blog3' , 'Blog4']
  getblogs(){
    return this.Blogs;
  }
  constructor() { }
}
