import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './world-page.component.html',
  styleUrls: ['./world-page.component.css']
})
export class WorldPageComponent {

  @ViewChild('map') public divMap?: ElementRef;

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
      center: [10.638579240406898, 35.37002010343717], // starting position [lng, lat]
      zoom: 2 // starting zoom
    });
  }

}
