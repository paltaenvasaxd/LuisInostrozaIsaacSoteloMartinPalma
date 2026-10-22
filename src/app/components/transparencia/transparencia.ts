import { Component } from '@angular/core';
import { ENLACES_TRANSPARENCIA, REDES_SOCIALES } from '../../data/navegacion';

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.html',
})
export class Transparencia {
  protected readonly redes = REDES_SOCIALES;
  protected readonly enlaces = ENLACES_TRANSPARENCIA;
}
