import { Component, OnInit } from '@angular/core';
import { RegisterationService } from '../services/registeration.service';
import { NgForm } from '@angular/forms';
import { Customer } from '../models/cutomer.model';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private registerationService: RegisterationService) { }

  ngOnInit() {
  }

  onSaveRegisteration(f: NgForm){
    let customer = new Customer(f.value.name, f.value.lastName, f.value.email, f.value.password);
    this.registerationService.registerNewUser(customer).subscribe();
  }

}
