import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent {
  emailstring: string | undefined = undefined
  http: string | undefined = undefined
  constructor(public authService: AuthService) { }
  ngOnInit() {
    this.emailstring = "mailto:zaslavskij@seznam.cz?:  %0D"
    this.http = "//link1.com  %0D http://link1.com";
  }
}
