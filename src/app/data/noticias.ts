export interface Noticia {
  imagen: string;
  alt: string;
  titulo: string;
  fecha: string;
}

export const NOTICIAS: Noticia[] = [
  {
    imagen: 'img/noticia_1.jpg',
    alt: 'Noticia 1',
    titulo: 'Histórica aprobación de más de $4.494 millones',
    fecha: 'junio 3, 2026',
  },
  {
    imagen: 'img/noticia_2.jpeg',
    alt: 'Noticia 2',
    titulo: 'Aprueban más de $1.175 millones para asfalto',
    fecha: 'marzo 20, 2026',
  },
  {
    imagen: 'img/noticia_3.png',
    alt: 'Noticia 3',
    titulo: 'Semana Retirana 2026, la fiesta más grande',
    fecha: 'enero 28, 2026',
  },
  {
    imagen: 'img/noticia_4.jpeg',
    alt: 'Noticia 4',
    titulo: 'Ayuda a damnificados por incendios Bio Bio',
    fecha: 'enero 27, 2026',
  },
];
