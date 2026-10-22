import { Component } from '@angular/core';
import { NOTICIAS } from '../../data/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.html',
})
export class Noticias {
  protected readonly noticias = NOTICIAS;
}
