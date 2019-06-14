import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
// import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-fy-map',
  templateUrl: './fy-map.component.html',
  styleUrls: ['./fy-map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FyMapComponent {
  constructor(
    public route: ActivatedRoute,
  ) {}

  selectedState: any = [
    {'code': 'ND', 'users': 324, 'org type' :'Service Provider'}, 
    {'code': 'WA', 'users': 454, 'org type' :'Manufacturer'}, 
    {'code':'AZ', 'users': 234, 'org type' :'Service Provider'}, 
    {'code' : 'AK', 'users': 544, 'org type' :'Manufacturer'},
    {'code' : 'CT', 'users': 544, 'org type' :'Manufacturer'},
    {'code' : 'DC', 'users': 544, 'org type' :'Manufacturer'},
  ];
}