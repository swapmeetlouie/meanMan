import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapStates } from './map/map.service';
import { FyMapComponent } from './fy-map-bu/fy-map.component';
// import { PrintDashComponent } from './print-dash/print-dash.component';
// import { PrintPageComponent } from './print-page/print-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapComponent, FyMapComponent],
  exports: [MapComponent],
  providers: [MapStates],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SlMapModule { }