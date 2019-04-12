import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Post } from "./post.model";
@Injectable({ providedIn: "root" }) // Setup server instance 

export class PostsService {
  public posts: Post[] = []; // Empty array 

  constructor(private http: HttpClient, private router: Router) {}

  getPost(majCom: string) { // Retrieval of dashboard data
      return this.http.get<{ id: string; majCom: string;
                            reportDate: string;
                            totalSpend: number; sbSpend: number; otsbSpend: number;
                            percSb: number; 
                            spendBreak: object; 
                            goalSb: number; maxSb: number; 
                            percSdb: number; goalSdb: number; maxSdb: number;
                            percSdvo: number; goalSdvo: number;  maxSdvo: number;
                            percWosb: number; goalWosb: number; maxWosb: number;
                            percHubzone: number; goalHubzone: number; maxHubzone: number;
                            // Card Colors and Spends data structure is rigid 
                            // full definition of each in majcom.component.ts
                            cardColor: object;
                            cardSpend: Text;
                            sdbSpend: number; sdvoSpend: number; wosbSpend: number; hubzoneSpend: number;
                            sbColor: string; sdbColor: string; sdvoColor: string; wosbColor: string; hubzoneColor: string;
                            // Defined six Portfolio Groups though we usually only use four
                            portName1: string; portValue1: number;  
                            portName2: string; portValue2: number;
                            portName3: string; portValue3: number;
                            portName4: string; portValue4: number;
                            portName5: string; portValue5: number;
                            portName6: string; portValue6: number;
                            portGroups: object;
                            }>(
      "http://localhost:9876/api/dash_fy19/" + majCom // Development API location 
    );
  }
}
