import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type Campo = 'nombre' | 'email' | 'asunto' | 'comentarios';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
})
export class Contacto {
  private readonly fb = inject(FormBuilder);

  protected readonly intentoEnvio = signal(false);
  protected readonly enviado = signal(false);

  protected readonly mensajesRequeridos: Record<Campo, string> = {
    nombre: 'El nombre es obligatorio',
    email: 'El e-mail es obligatorio',
    asunto: 'El asunto es obligatorio',
    comentarios: 'Los comentarios son obligatorios',
  };

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    asunto: ['', Validators.required],
    comentarios: ['', Validators.required],
  });

  protected mostrarError(campo: Campo): boolean {
    const control = this.form.controls[campo];
    return control.invalid && (control.touched || this.intentoEnvio());
  }

  protected mostrarValido(campo: Campo): boolean {
    const control = this.form.controls[campo];
    return control.valid && control.value.trim() !== '' && (control.touched || this.intentoEnvio());
  }

  protected mensajeError(campo: Campo): string {
    const control = this.form.controls[campo];

    if (control.hasError('required')) {
      return this.mensajesRequeridos[campo];
    }

    if (control.hasError('email')) {
      return 'Ingrese un correo electrónico válido';
    }

    return '';
  }

  protected enviar(): void {
    this.intentoEnvio.set(true);
    this.enviado.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { nombre, email, asunto, comentarios } = this.form.getRawValue();

    console.log('=== NUEVO MENSAJE DESDE OIRS RETIRO ===');
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Asunto:', asunto);
    console.log('Comentarios:', comentarios);
    console.log('=======================================');

    alert('¡Formulario validado y mensaje enviado con éxito!');

    this.form.reset();
    this.form.markAsUntouched();
    this.intentoEnvio.set(false);
    this.enviado.set(true);
  }
}
