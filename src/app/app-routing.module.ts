import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'' ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'gallary'  , canActivate:[AuthGuard] , component:GallaryComponent},
  {path:'movies'  , canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'navbar'  , component:NavbarComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login'  , component:LoginComponent},
  {path:'notfound'   , canActivate:[AuthGuard], component:NotfoundComponent},
  {path:'about'  , canActivate:[AuthGuard] , component:AboutComponent},
  {path:'moviesdetails/:id'  , canActivate:[AuthGuard] , component:MoviedetailsComponent},
  {path:'contacts'  , canActivate:[AuthGuard] , component:ContactsComponent},
  {path:'tv'  , canActivate:[AuthGuard], component:TvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],








exports: [RouterModule]
})
export class AppRoutingModule { }
