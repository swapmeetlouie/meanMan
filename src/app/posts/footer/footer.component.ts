import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {
  datePrint = '03 April 2019';
  constructor(
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {}
}