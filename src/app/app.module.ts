import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { HomeComponent } from './comp/home/home.component';
import { NotfoundComponent } from './comp/notfound/notfound.component';
import { BlogsComponent } from './comp/blogs/blogs.component';
import { MembresComponent } from './comp/membres/membres.component';
import { ContactComponent } from './comp/contact/contact.component';
import { EventComponent } from './comp/event/event.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AddBlogComponent } from './comp/add-blog/add-blog.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { FormsModule } from '@angular/forms';
import { DelailblogComponent } from './comp/delailblog/delailblog.component'
import { EventService } from './services/event.service';
import { AddeventComponent } from './comp/addevent/addevent.component';
import { AddmembreComponent } from './comp/addmembre/addmembre.component';
import { ViewmessageComponent } from './comp/viewmessage/viewmessage.component';
import { MessageService } from './services/message.service';
import { MembreService } from './services/membre.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    BlogsComponent,
    MembresComponent,
    ContactComponent,
    EventComponent,
    AddBlogComponent,
    DelailblogComponent,
    AddeventComponent,
    AddmembreComponent,
    ViewmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    EditorModule,
    CoreModule,
    SharedModule,
    FormsModule
  ],
  providers: [AuthService,PostService,EventService,MessageService,MembreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
