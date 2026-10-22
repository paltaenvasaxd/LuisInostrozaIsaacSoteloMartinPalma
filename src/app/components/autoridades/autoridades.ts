import { Component } from '@angular/core';
import { ALCALDE, CONCEJALES, FUNCIONES } from '../../data/autoridades';

@Component({
  selector: 'app-autoridades',
  templateUrl: './autoridades.html',
})
export class Autoridades {
  protected readonly alcalde = ALCALDE;
  protected readonly concejales = CONCEJALES;
  protected readonly funciones = FUNCIONES;
}
