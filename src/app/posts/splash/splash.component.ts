import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { majName } from '../data';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SplashComponent implements OnInit {
  majCom: string;
  constructor(
    public postsService: PostsService
  ) { 
    this.majCom=majName;
  }

  ngOnInit() {
  }

}
