import { Component } from '@angular/core';
import { MENU_NAVEGACION } from '../../data/navegacion';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  protected readonly menu = MENU_NAVEGACION;
}
