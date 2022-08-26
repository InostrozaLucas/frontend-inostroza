import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadesService } from 'src/app/servicos/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public habilidad: Habilidades[] = [];
  public editHabilidades: Habilidades | undefined;
  public deleteHabilidades: Habilidades | undefined;

  constructor(private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
    this.getHabilidades();
  }
  public getHabilidades(): void {
    this.habilidadesService.getHabilidades().subscribe({
      next: (Response: Habilidades[]) => {
        this.habilidad = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode: string, habilidad?: Habilidades): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addHabilidadesModal');
    } else if (mode === 'delete') {
      this.deleteHabilidades = habilidad;
      button.setAttribute('data-bs-target', '#deleteHabilidadesModal');
    } else if (mode === 'edit') {
      this.editHabilidades = habilidad;
      button.setAttribute('data-bs-target', '#editHabilidadesModal');
    }
  }

  public onAddHabilidades(addForm: NgForm) {
    document.getElementById('add-habilidades-form')?.click();
    this.habilidadesService.addHabilidades(addForm.value).subscribe({
      next: (response: Habilidades) => {
        console.log(response);
        this.getHabilidades();
        addForm.resetForm();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
        addForm.reset();
      }
  })
  }
  public onUpdateHabilidades(habilidades: Habilidades) {
    this.editHabilidades = habilidades;
    document.getElementById('add-habilidades-form')?.click();
    this.habilidadesService.updateHabilidades(habilidades).subscribe({
      next: (response: Habilidades) => {
        console.log(response);
        this.getHabilidades();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  public onDeleteHabilidades(idHab: number): void {
    this.habilidadesService.deleteHabilidades(idHab).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getHabilidades();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
