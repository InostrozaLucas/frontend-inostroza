import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { UserService } from 'src/app/servicos/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  formInit: FormGroup;

  constructor(
    private userService: UserService,
    private router:Router
  ) { 
    this.formInit = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }


  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.iniciarsesion(this.formInit.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/porfolio']);
      }
      )
      .catch(error => console.log(error));
  }
}
