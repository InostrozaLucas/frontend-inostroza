import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicos/user.service';

@Component({
  selector: 'app-rr-ss',
  templateUrl: './rr-ss.component.html',
  styleUrls: ['./rr-ss.component.css']
})
export class RrSsComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.userService.salir()
      .then(() => {
        this.router.navigate(['/porfolio-home']);
      })
      .catch(error => console.log(error));
    
    
  }

}
