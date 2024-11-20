import { Component } from '@angular/core';
import { Contrato } from '../../models/contrato';
import { ContratoService } from '../../services/contrato.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-registros',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mostrar-registros.component.html',
  styleUrl: './mostrar-registros.component.css'
})
export class MostrarRegistrosComponent {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService,
    private router : Router
  ) {}

  async ngOnInit() {
    await this.contratoService.getContratos().then(contratos => {
      this.contratos = contratos;
    });
  }

  navigateToCreateContrato(){
    this.router.navigate(['/agregar-registros']);
  }

}
