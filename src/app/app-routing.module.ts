import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './comp/notfound/notfound.component';
import { HomeComponent } from './comp/home/home.component';
import { BlogsComponent } from './comp/blogs/blogs.component';
import { MembresComponent } from './comp/membres/membres.component';
import { ContactComponent } from './comp/contact/contact.component';
import { EventComponent } from './comp/event/event.component';
import { AddBlogComponent } from './comp/add-blog/add-blog.component';
import { DelailblogComponent } from './comp/delailblog/delailblog.component';
import { AddeventComponent } from './comp/addevent/addevent.component';
import { AddmembreComponent } from './comp/addmembre/addmembre.component';
import { ViewmessageComponent } from './comp/viewmessage/viewmessage.component';


const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "blogs", component: BlogsComponent },
 {path: "membres", component: MembresComponent },
   {path: "contact", component: ContactComponent },
   {path: "event", component: EventComponent },
   {path: "addBlog", component: AddBlogComponent },
  {path: "blogs/:id", component: DelailblogComponent },
  {path: "addEvent", component: AddeventComponent },
  {path: "addMembre", component: AddmembreComponent },
  {path: "viewMessage", component: ViewmessageComponent },
  {path: "**", component: NotfoundComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
