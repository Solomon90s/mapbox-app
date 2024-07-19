import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accesToken = 'pk.eyJ1Ijoia29iZTY2NjY2NiIsImEiOiJjbHlzcXZtMnMwYWQ2Mm1xcmIxeXdrMnB0In0.ch6pURCvCUXSg6jY7BAweg';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }



}
