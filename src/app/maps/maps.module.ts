import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1Ijoia29iZTY2NjY2NiIsImEiOiJjbHlzcXZtMnMwYWQ2Mm1xcmIxeXdrMnB0In0.ch6pURCvCUXSg6jY7BAweg';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { WorldPageComponent } from './pages/world-page/world-page.component';
import { ZoomRagePageComponent } from './pages/zoom-rage-page/zoom-rage-page.component';

import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";


@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    WorldPageComponent,
    ZoomRagePageComponent,
  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    MapsRoutingModule,
    SideMenuComponent
]
})
export class MapsModule { }
