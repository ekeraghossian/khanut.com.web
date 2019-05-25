import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { LoginRequest } from '../models/loginRequest.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin(f: NgForm){
    let loginRequest = new LoginRequest(f.value.username, f.value.password);
    this.loginService.login(loginRequest).subscribe();
    console.log(loginRequest);
  }

}
