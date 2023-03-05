import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  links = ['cuentas', 'productos', 'clientes', ];
  activeLink = this.links[0];

}
