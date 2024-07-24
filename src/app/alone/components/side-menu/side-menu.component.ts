import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'src/app/maps/interfaces/menu-item';



@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { route: '/maps/world', name: 'World' },
    { route: '/maps/fullscreen', name: 'FullScreen' },
    { route: '/maps/zoom', name: 'Zoom-Range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
    { route: '/alone', name: 'Alone Page' },

  ]

}
