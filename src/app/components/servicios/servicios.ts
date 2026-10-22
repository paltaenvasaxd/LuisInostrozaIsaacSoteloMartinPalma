import { Component } from '@angular/core';
import { CATEGORIAS_SERVICIOS } from '../../data/servicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.html',
})
export class Servicios {
  protected readonly categorias = CATEGORIAS_SERVICIOS;

  protected esExterno(enlace: string): boolean {
    return enlace.startsWith('http');
  }
}
