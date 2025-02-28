import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';
import { MarkerAndColor } from '../../interfaces/marker-and-color';
import { PlainMarker } from '../../interfaces/plain-marker';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})

export class MarkersPageComponent {
  @ViewChild('map') public divMap?: ElementRef;

  public currentMarkers: MarkerAndColor[] = [];

  public currentZoom: number = 12.85;
  /*
  ? Significa que en el algún momento del tiempo estará nulo
  */
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-0.37966, 39.47391);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });

    this.readFromLocalStorage();

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

  createMarker() {
    //* Si el mapa no existe no hacemos nada
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.currentMarkers.push({ color, marker });
    this.saveToLocalStorage();

    // ! evento dragend
    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }


  deleteMarker( index: number ) {
    this.currentMarkers[index].marker.remove();
    this.currentMarkers.splice( index, 1 );

    localStorage.removeItem('plainMarkers');

    console.log('Marcador borrado con éxito');
  }


  flyTo( marker: Marker ) {
    this.map?.flyTo({
      zoom: 18,
      center: marker.getLngLat()
    });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.currentMarkers.map( ({ color, marker }) =>{
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });
    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkersString ); //! OJO, los datos vienen de la interface!

    plainMarkers.forEach( ({ color, lngLat}) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat );
      this.addMarker( coords, color);
    });
  }

}
