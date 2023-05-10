import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    FooterComponent,
    CreatePostComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    NgbModule,
    ToastModule,
    PanelModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
