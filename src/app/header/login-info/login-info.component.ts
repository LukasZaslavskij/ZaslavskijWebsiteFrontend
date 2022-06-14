import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent {

  constructor(private route: Router, public authService: AuthService) { }


  logout() {
    this.authService.login('undefined', 'undefined')
    this.route.navigate(['/auth']);
  }
}
