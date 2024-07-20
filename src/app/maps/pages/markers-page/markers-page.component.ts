import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker} from 'mapbox-gl';
@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map') public divMap?: ElementRef;

  public currentZoom: number = 13;
  /*
  ? Significa que en el algún momento del tiempo estará nulo
  */
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-1.1004400, 39.4883400);

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });

    /*
    * Para crear nuestro propio html
    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Jose Manuel';
    */

    // const marker = new Marker({
    //   color: 'red'
    // })
    //   .setLngLat( this.currentLngLat)
    //   .addTo( this.map);



  }
}
