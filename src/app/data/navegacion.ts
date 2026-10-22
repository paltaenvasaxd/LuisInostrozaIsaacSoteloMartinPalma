export interface EnlaceMenu {
  texto: string;
  enlace: string;
  activo?: boolean;
}

export const MENU_NAVEGACION: EnlaceMenu[] = [
  { texto: 'INICIO', enlace: '#inicio', activo: true },
  { texto: 'NOTICIAS', enlace: '#noticias' },
  { texto: 'AUTORIDADES', enlace: '#autoridades' },
  { texto: 'SALUD', enlace: '#salud' },
  { texto: 'INFORMACIONES', enlace: '#servicios' },
];

export interface EnlaceExterno {
  texto: string;
  enlace: string;
  icono?: string;
}

export const REDES_SOCIALES: EnlaceExterno[] = [
  {
    texto: 'Facebook',
    enlace: 'https://web.facebook.com/people/Ilustre-Municipalidad-de-Retiro/100064421333226/',
    icono: 'bi bi-facebook',
  },
  {
    texto: 'Instagram',
    enlace: 'https://www.instagram.com/muniretiro/',
    icono: 'bi bi-instagram',
  },
];

export const ENLACES_TRANSPARENCIA: EnlaceExterno[] = [
  {
    texto: 'TRANSPARENCIA ACTIVA',
    enlace:
      'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU268',
  },
  {
    texto: 'SOLICITUD DE INFORMACION TA',
    enlace: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=undefined',
  },
  {
    texto: 'LEY DEL LOBBY',
    enlace: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=undefined',
  },
];
