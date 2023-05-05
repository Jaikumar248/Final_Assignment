import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    FooterComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    NgbModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
