import { Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
// import { switchMap } from 'rxjs/operators';
import {  ActivatedRoute } from "@angular/router";
import { Post } from "../post.model";
import { Observable } from "rxjs";
import { dateData, majName } from '../data';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  dateData: string;
  majCom: string;

  post$: Observable<Post>;

  post: Post[];
  // majCom =post.majCom;
  istrue = true;
  isLoading = true;
  // isLoading = true;
  majComm = true;
  // hoez = this.majCom; 

  constructor(
    public route: ActivatedRoute,
  ) {
    this.dateData=dateData;
    this.majCom=majName;
  }


  ngOnInit() {}

  };

