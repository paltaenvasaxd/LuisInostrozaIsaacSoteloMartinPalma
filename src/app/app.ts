import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Transparencia } from './components/transparencia/transparencia';
import { Servicios } from './components/servicios/servicios';
import { Destacados } from './components/destacados/destacados';
import { Noticias } from './components/noticias/noticias';
import { Autoridades } from './components/autoridades/autoridades';
import { Mapa } from './components/mapa/mapa';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Transparencia,
    Servicios,
    Destacados,
    Noticias,
    Autoridades,
    Mapa,
    Contacto,
    Footer,
  ],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
