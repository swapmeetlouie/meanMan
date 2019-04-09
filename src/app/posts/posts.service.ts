import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Post } from "./post.model";

@Injectable({ providedIn: "root" })

export class PostsService {
  public posts: Post[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  // getPosts() {
  //   this.http
  //     .get<{ message: string; posts: any }>("http://localhost:9876/api/dash_fy19")
  //     .pipe(
  //       map(postData => {
  //         return postData.posts.map(post => {
  //           return {
  //             majCom: post.majCom,
  //             reportDate: post.majCom,
  //             totalSpend: post.totalSpend,
  //             sbSpend: post.sbSpend,
  //             otsbSpend: post.otsbSpend,
  //             percSb: post.percSb,
  //             spendBreak: post.spendBreak,
  //             portValue: post.portValue,
  //             goalSb: post.goalSb,
  //             maxSb: post.maxSb,
  //             percSdb: post.percSdb,
  //             goalSdb: post.goalSdb,
  //             maxSdb: post.maxSdb,
  //             percSdvo: post.percSdvo,
  //             goalSdvo: post.goalSdvo,
  //             maxSdvo: post.maxSdvo,
  //             percWosb: post.percWosb,
  //             goalWosb: post.goalWosb,
  //             maxWosb: post.maxWosb,
  //             percHubzone: post.percHubzone,
  //             goalHubzone: post.goalHubzone,
  //             maxHubzone: post.maxHubzone,
  //             cardColor: post.cardColor,
  //             cardSpend: post.cardSpend,
  //             sdbSpend: post.sdbSpend,
  //             sdvoSpend: post.sdvoSpend,
  //             wosbSpend: post.wosbSpend,
  //             hubzoneSpend: post.hubzoneSpend,
  //             sbColor: post.sbColor,
  //             sdbColor: post.sdbColor,
  //             sdvoColor: post.sdvoColor,
  //             wosbColor: post.wosbColor,
  //             hubzoneColor: post.hubzoneColor,
  //             id: post._id
  //           };
  //         });
  //       })
  //     )
  //     .subscribe(transformedPosts => {
  //       this.posts = transformedPosts;
  //     });
  // }

  // getPostUpdateListener() {
  //   // return this.postsUpdated.asObservable();
  // }

  getPost(majCom: string) {
      return this.http.get<{ id: string; majCom: string;
                            reportDate: string;
                            totalSpend: number; 
                            sbSpend: number; otsbSpend: number; percSb: number; 
                            spendBreak: object; goalSb: number; 
                            maxSb: number; percSdb: number;
                            goalSdb: number;
                            maxSdb: number;
                            percSdvo: number;
                            goalSdvo: number;
                            maxSdvo: number;
                            percWosb: number;
                            goalWosb: number;
                            maxWosb: number;
                            percHubzone: number;
                            goalHubzone: number;
                            maxHubzone: number;
                            cardColor: object;
                            cardSpend: Text;
                            sdbSpend: number;
                            sdvoSpend: number;
                            wosbSpend: number;
                            hubzoneSpend: number;
                            sbColor: string;
                            sdbColor: string;
                            sdvoColor: string;
                            wosbColor: string;
                            hubzoneColor: string;
                            portName1: string;
                            portValue1: number;  
                            portName2: string;
                            portValue2: number;
                            portName3: string;
                            portValue3: number;
                            portName4: string;
                            portValue4: number;
                            portName5: string;
                            portValue5: number;
                            portName6: string;
                            portValue6: number;
                            portGroups: object;
                            }>(
      "http://localhost:9876/api/dash_fy19/" + majCom
    );
  }
  junk: number = Date.now();
}
