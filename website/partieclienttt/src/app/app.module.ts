import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import { HeaderComponent } from './home/header/header.component';
import { ContainerComponent } from './home/container/container.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CoursComponent } from './home/cours/cours.component';
import { ContactComponent } from './home/contact/contact.component';
import { CoursdetComponent } from './home/coursdet/coursdet.component';
import { ProjetComponent } from './home/projet/projet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TopbarComponent,
    HeaderComponent,
    ContainerComponent,
    LoginComponent,
    CoursComponent,
    ContactComponent,
    CoursdetComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
