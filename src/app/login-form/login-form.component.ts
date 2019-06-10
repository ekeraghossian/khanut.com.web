import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { LoginRequest } from '../models/loginRequest.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  returnUrl: string;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['/supplier'] || '/supplier';
  }

  onLogin(f: NgForm){
    let loginRequest = new LoginRequest(f.value.username, f.value.password);
    this.loginService.login(loginRequest).subscribe();
    this.router.navigate([this.returnUrl]);
  }

}
