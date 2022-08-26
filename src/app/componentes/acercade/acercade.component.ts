import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AcerdadeService } from 'src/app/servicos/acerdade.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private acerdadeService: AcerdadeService) { }

  ngOnInit(): void {
    this.getUsuario();
  }
  public getUsuario(): void {
    this.acerdadeService.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenModal(mode: string, usuario?: Usuario): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addUsuarioModal');
    } else if (mode === 'edit') {
      this.editUsuario = usuario;
      button.setAttribute('data-bs-target', '#editUsuarioModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdateUsuario(usuario: Usuario) {
    this.editUsuario = usuario;
    document.getElementById('add-usuario-form')?.click();
    this.acerdadeService.updateUsuario(usuario).subscribe({
      next: (response: Usuario) => {
        console.log(response);
        this.getUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
