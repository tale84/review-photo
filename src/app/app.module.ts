import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from './service/post.service';
import {UserService} from './service/user.service';
import { UserComponent } from './user/user.component';
import { MediaComponent } from './media/media.component';
import {MediaService} from './service/media.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, UserService, MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
