import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuardService } from '../../services/auth-guard.service';
@Component({
  selector: 'app-suivientreprises',
  templateUrl: './suivientreprises.component.html',
  styleUrls: ['./suivientreprises.component.css']
})
export class SuiviEntreprisesComponent implements OnInit {
  profile: any;
  constructor(private auth:AuthService) { }

  ngOnInit() {
  if (this.auth.userProfile) {
      this.profile = 11
    } else {
         this.profile = 22
    }
  }

}



