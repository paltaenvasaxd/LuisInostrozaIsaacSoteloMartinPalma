export interface Servicio {
  icono: string;
  colorIcono: string;
  titulo: string;
  enlace: string;
}

export interface CategoriaServicio {
  titulo: string;
  colorTitulo: string;
  escalaIcono: string;
  tamanoTitulo: string;
  columna: string;
  servicios: Servicio[];
}

export const CATEGORIAS_SERVICIOS: CategoriaServicio[] = [
  {
    titulo: 'Trámites Vehiculares y Tránsito',
    colorTitulo: 'text-primary',
    escalaIcono: 'fs-1',
    tamanoTitulo: '0.85rem',
    columna: 'col-6 col-md-3',
    servicios: [
      {
        icono: 'bi-car-front',
        colorIcono: 'text-primary',
        titulo: 'PERMISO DE CIRCULACIÓN',
        enlace:
          'https://ww14.e-com.cl/Pagos/PermisoCirculacion/renovacion/ecomv3_be/vista/?id=122&plebcas=12&portal=%2719/09/2026%27&html=70&opc=1',
      },
      {
        icono: 'bi-credit-card',
        colorIcono: 'text-danger',
        titulo: 'PAGA AQUÍ MULTAS TAG',
        enlace: 'https://ww14.e-com.cl/Pagos/Multas_Tag_v3/?id=122',
      },
      {
        icono: 'bi-shield-check',
        colorIcono: 'text-success',
        titulo: 'ENCARGO POLICIAL',
        enlace: 'https://www.autoseguro.gob.cl/',
      },
      {
        icono: 'bi-cone-striped',
        colorIcono: 'text-warning',
        titulo: 'REGISTRO VEHICULAR',
        enlace: 'https://retiro.cl/formulario-de-registro-permisos-de-circulacion/',
      },
    ],
  },
  {
    titulo: 'Pagos y Patentes Comerciales',
    colorTitulo: 'text-success',
    escalaIcono: 'fs-1',
    tamanoTitulo: '0.85rem',
    columna: 'col-6 col-md-3',
    servicios: [
      {
        icono: 'bi-bank',
        colorIcono: 'text-primary',
        titulo: 'JUZGADO POLICÍA LOCAL',
        enlace: 'https://ww14.e-com.cl/Pagos/JPL_v3/partes_online/ingresoJuzgado.asp?codMunic=122',
      },
      {
        icono: 'bi-shop',
        colorIcono: 'text-success',
        titulo: 'PATENTES COMERCIALES',
        enlace: 'https://ww14.e-com.cl/Pagos/JPL_v3/partes_online/ingresoJuzgado.asp?codMunic=122',
      },
      {
        icono: 'bi-person-vcard',
        colorIcono: 'text-info',
        titulo: 'SOLICITUD LICENCIAS',
        enlace: 'https://heyzine.com/flip-book/bd47ec2244.html',
      },
      {
        icono: 'bi-file-earmark-text',
        colorIcono: 'text-secondary',
        titulo: 'GESTOR DOCUMENTAL',
        enlace: '#',
      },
    ],
  },
  {
    titulo: 'Comunidad e Informaciones',
    colorTitulo: 'text-danger',
    escalaIcono: 'fs-2',
    tamanoTitulo: '0.75rem',
    columna: 'col-6 col-md-2',
    servicios: [
      {
        icono: 'bi-calendar-check',
        colorIcono: 'text-info',
        titulo: 'AUDIENCIAS',
        enlace: '#',
      },
      {
        icono: 'bi-people-fill',
        colorIcono: 'text-primary',
        titulo: 'ORGANIZACIONES',
        enlace: 'https://retiro.cl/organizaciones/#toggle-id-1-closed',
      },
      {
        icono: 'bi-envelope-fill',
        colorIcono: 'text-warning',
        titulo: 'CORREO INST.',
        enlace: 'https://mail.retiro.cl/',
      },
      {
        icono: 'bi-lightning-fill',
        colorIcono: 'text-warning bg-dark rounded-circle p-1',
        titulo: 'ALUMBRADO',
        enlace: 'https://retiro.cl/contacto-electrico/',
      },
      {
        icono: 'bi-play-btn-fill',
        colorIcono: 'text-danger',
        titulo: 'CONCEJO ONLINE',
        enlace: 'https://retiro.cl/transmisiones-concejos-municipales/',
      },
    ],
  },
];
