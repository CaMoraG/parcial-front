import { Component } from '@angular/core';
import { Contrato } from '../../models/contrato';
import { ContratoService } from '../../services/contrato.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-registros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-registros.component.html',
  styleUrls: ['./agregar-registros.component.css']
})
export class AgregarRegistrosComponent {
  contrato: Contrato = new Contrato();

  constructor(private contratoService: ContratoService,
    private router : Router
  ){}

  async createContrato(){
    await this.contratoService.createContrato(this.contrato).then( newContrato =>{
      this.contrato = newContrato;
    });

    if (this.contrato.identificador){
      alert('Contrato creado con éxito');
      this.router.navigate(['/mostrar-registros']);
    }else{
      alert('Error al crear el contrato');
    }
  }

}
