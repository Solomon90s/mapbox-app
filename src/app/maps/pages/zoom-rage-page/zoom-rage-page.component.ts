import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-rage-page.component.html',
  styleUrls: ['./zoom-rage-page.component.css']
})
export class ZoomRagePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') public divMap?: ElementRef;

  public currentZoom: number = 5.5;
  /*
  ? Significa que en el algún momento del tiempo estará nulo
  */
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-3.70256, 40.4165);

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }



  mapListeners() {
    if ( !this.map ) throw 'El mapa no existe';

    this.map.on('zoom', (event) => {
      this.currentZoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (event) => {
      if (this.map!.getZoom() < 20 ) return;
      this.map!.zoomTo(20);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged( value: string) {
      this.currentZoom = Number(value);
      this.map?.zoomTo( this.currentZoom );
    }

}
