export interface Autoridad {
  imagen: string;
  alt: string;
  nombre: string;
  cargo: string;
  colorBadge: string;
}

export const ALCALDE: Autoridad = {
  imagen: 'img/alcalde.jpg',
  alt: 'Alcalde Rafael Ramírez Parra',
  nombre: 'Rafael Ramírez Parra',
  cargo: 'ALCALDE',
  colorBadge: 'bg-primary',
};

export const CONCEJALES: Autoridad[] = [
  {
    imagen: 'img/concejal_1.png',
    alt: 'Cristian Ramos Ramos',
    nombre: 'Cristian Ramos Ramos',
    cargo: 'CONCEJAL',
    colorBadge: 'bg-secondary',
  },
  {
    imagen: 'img/concejal_2.png',
    alt: 'Francisco Leiva Guzmán',
    nombre: 'Francisco Leiva Guzmán',
    cargo: 'CONCEJAL',
    colorBadge: 'bg-secondary',
  },
  {
    imagen: 'img/concejal_3.png',
    alt: 'Gonzalo Espinoza Parada',
    nombre: 'Gonzalo Espinoza Parada',
    cargo: 'CONCEJAL',
    colorBadge: 'bg-secondary',
  },
  {
    imagen: 'img/concejal_4.png',
    alt: 'José Aravena Jara',
    nombre: 'José Aravena Jara',
    cargo: 'CONCEJAL',
    colorBadge: 'bg-secondary',
  },
  {
    imagen: 'img/concejal_5.png',
    alt: 'Benjamín Pacheco Caro',
    nombre: 'Benjamín Pacheco Caro',
    cargo: 'CONCEJAL',
    colorBadge: 'bg-secondary',
  },
  {
    imagen: 'img/concejal_6.png',
    alt: 'Magaly Moya Vallejos',
    nombre: 'Magaly Moya Vallejos',
    cargo: 'CONCEJAL',
    colorBadge: 'bg-secondary',
  },
];

export interface Funcion {
  titulo: string;
  colorTitulo: string;
  parrafos: string[];
  vinetas: string[];
  enlace?: { texto: string; url: string };
}

export const FUNCIONES: Funcion[] = [
  {
    titulo: 'Funciones de los Concejales',
    colorTitulo: 'text-primary',
    parrafos: [
      'El concejo municipal debe normar a requerimiento del alcalde y dar su acuerdo para:',
    ],
    vinetas: [
      'Dictar las ordenanzas municipales y el reglamento que establecen la organización interna del municipio.',
      'Aprobar el plan comunal de desarrollo, el presupuesto municipal, los de salud y educación, los programas de inversión, el plan regulador comunal y las políticas de recursos humanos, de prestación de servicios municipales y de concesiones, permisos y licitaciones.',
    ],
    enlace: {
      texto: 'Reglamento de funcionamiento – Ver aquí',
      url: 'https://retiro.cl/archivos_adjuntos/Reglamentos/REGLAMENTO_DE_SALA_CONCEJO_MUNICIPAL.pdf',
    },
  },
  {
    titulo: 'Funciones del Alcalde',
    colorTitulo: 'text-primary',
    parrafos: [],
    vinetas: [
      'Representar judicial y extrajudicialmente al municipio.',
      'Proponer el plan comunal de desarrollo y el presupuesto municipal.',
      'Administrar los bienes municipales y promover el desarrollo de la comuna.',
      'Presidir el concejo municipal y ejecutar sus acuerdos.',
      'Supervisar el funcionamiento de los servicios municipales.',
    ],
  },
];
