import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TvComponent } from './tv/tv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallaryComponent,
    MoviesComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    AboutComponent,
    MoviedetailsComponent,
    ContactsComponent,
    TvComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
