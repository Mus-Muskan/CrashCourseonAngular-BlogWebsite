import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  {path:'home' , component:HomeComponent}, 
  {path:'blogs' , component:BlogsComponent },
  {path:'contact' , component:ContactComponent}, 
  {path:'aboutus' , component:AboutusComponent},
  {path:'' , redirectTo:'/home', pathMatch:'full'}, 
  {path:'**', component:PageNotFoundComponent}
] 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
