import { TestBed } from '@angular/core/testing';
import { Contacto } from './contacto';

describe('Contacto', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacto],
    }).compileComponents();
  });

  function preparar() {
    const fixture = TestBed.createComponent(Contacto);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    return {
      fixture,
      element,
      form: element.querySelector('form') as HTMLFormElement,
      escribir(campo: string, valor: string) {
        const input = element.querySelector(`#${campo}`) as HTMLInputElement;
        input.value = valor;
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
      },
      errorDe(campo: string) {
        return element.querySelector(`#${campo}`)?.classList.contains('is-invalid') ?? false;
      },
      validoDe(campo: string) {
        return element.querySelector(`#${campo}`)?.classList.contains('is-valid') ?? false;
      },
      enviar() {
        element.querySelector('form')?.dispatchEvent(new Event('submit'));
        fixture.detectChanges();
      },
    };
  }

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Contacto);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should mark every field as invalid when the form is submitted empty', () => {
    const { enviar, errorDe } = preparar();

    enviar();

    expect(errorDe('contact-name')).toBe(true);
    expect(errorDe('contact-email')).toBe(true);
    expect(errorDe('contact-asunto')).toBe(true);
    expect(errorDe('contact-comentarios')).toBe(true);
  });

  it('should reject an invalid email format', () => {
    const { escribir, enviar, errorDe } = preparar();

    escribir('contact-name', 'Ana Pérez');
    escribir('contact-email', 'correo-sin-arroba');
    escribir('contact-asunto', 'Consulta');
    escribir('contact-comentarios', 'Mensaje de prueba');
    enviar();

    expect(errorDe('contact-email')).toBe(true);
    expect(errorDe('contact-name')).toBe(false);
  });

  it('should accept the form, show the success badge and reset the fields', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => undefined);

    const { escribir, enviar, errorDe, validoDe, element } = preparar();

    escribir('contact-name', 'Ana Pérez');
    escribir('contact-email', 'ana@correo.cl');
    escribir('contact-asunto', 'Consulta');
    escribir('contact-comentarios', 'Mensaje de prueba');
    enviar();

    expect(alertSpy).toHaveBeenCalledWith('¡Formulario validado y mensaje enviado con éxito!');
    expect(element.querySelector('.badge.bg-success')?.textContent).toContain(
      'Mensaje enviado con éxito',
    );
    expect(errorDe('contact-name')).toBe(false);
    expect(validoDe('contact-name')).toBe(false);

    const nombre = element.querySelector('#contact-name') as HTMLInputElement;
    expect(nombre.value).toBe('');

    alertSpy.mockRestore();
  });
});
