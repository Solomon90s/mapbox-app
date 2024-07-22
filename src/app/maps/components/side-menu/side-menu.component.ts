import { Component } from '@angular/core';


interface MenuItem {
  name  : string;
  route : string;
}

@Component({
  selector: 'maps-side-menu',
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

  ]

}
