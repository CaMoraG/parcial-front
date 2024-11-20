import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private apiUrl = environment.apiUrl + '/contratos';

  constructor() { }

  getContratos(): Promise<Contrato[]> {
    return axios.get<Contrato[]>(`${this.apiUrl}`).then(response => response.data);
  }

  createContrato(contrato: Contrato): Promise<Contrato> {
    return axios.post<Contrato>(`${this.apiUrl}`, contrato).then(response => response.data);
  }
}
