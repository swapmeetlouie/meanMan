import { Component, ViewEncapsulation} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  constructor(
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {}
  };