import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/NavBar/navbar.component';
import { HomeComponent } from './components/Home/home.component';
import { SuiviEntreprisesComponent } from './components/SuiviEntreprises/suivientreprises.component';
import { InfoUserComponent } from './components/InfoUser/infouser.component';

import {APP_ROUTING} from './app.routes'
import { AuthService } from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoUserComponent,
    SuiviEntreprisesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
