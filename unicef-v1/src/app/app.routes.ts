import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { SuiviEntreprisesComponent } from './components/SuiviEntreprises/suivientreprises.component';
import { InfoUserComponent } from './components/InfoUser/infouser.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'suivientreprises', component: SuiviEntreprisesComponent },
    { 
        path: 'infouser', component: InfoUserComponent,
        canActivate : [AuthGuardService]
    },
    { path: '**', component: HomeComponent },
];

export const APP_ROUTING = RouterModule.forRoot(routes);
