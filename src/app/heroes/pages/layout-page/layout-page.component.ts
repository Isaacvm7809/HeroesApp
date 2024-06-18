import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterLink,
    MatSidenavModule, MatButtonModule, MatIconModule, MatNavList,
    MatToolbarModule,
   ],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'Listado', icon:'label',url:'/heroes/list' },
    { label: 'Añadir', icon:'add',   url:'/heroes/new-hero' },
    { label: 'Buscar', icon:'search',url:'/heroes/search' },
  ]

}

