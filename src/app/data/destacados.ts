export interface Destacado {
  imagen: string;
  alt: string;
  enlace: string;
}

export const DESTACADOS: Destacado[] = [
  {
    imagen: 'img/concursos.png',
    alt: 'Concursos Públicos',
    enlace: 'https://retiro.cl/concursos-publicos/#toggle-id-3-closed',
  },
  {
    imagen: 'img/encuesta.png',
    alt: 'Encuesta Senda',
    enlace: 'https://www.senda.gob.cl/programa-prevencion/encuesta-juventud-y-bienestar/',
  },
  {
    imagen: 'img/junio.png',
    alt: 'Senda Junio',
    enlace: 'https://www.senda.gob.cl/',
  },
  {
    imagen: 'img/estados_financieros.png',
    alt: 'Estados Financieros',
    enlace: 'https://www.retiro.cl/archivos_adjuntos/INFORME-ESTADOS-FINANCIEROS-2025-.pdf',
  },
];
