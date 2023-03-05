import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = ['cuentas', 'productos', 'clientes', ];
  activeLink = this.links[0];
  constructor(
    private readonly router: Router
  ) {

  }
  ngOnInit(): void {
    this.handleUpdateTab();
  }
  public handleUpdateTab() {
    const location = window.location.pathname;
    this.activeLink = location.split('/')[1] || 'cuentas';
  }
}
