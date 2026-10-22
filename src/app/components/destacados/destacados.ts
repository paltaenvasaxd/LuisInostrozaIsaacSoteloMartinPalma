import { Component } from '@angular/core';
import { DESTACADOS } from '../../data/destacados';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.html',
})
export class Destacados {
  protected readonly destacados = DESTACADOS;
}
