import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Post, Goal } from "./post.model";
@Injectable({ providedIn: "root" }) // Setup server instance 

export class PostsService {
  public posts: Post[] = []; // Empty array 

  constructor(private http: HttpClient, private router: Router) {}

  getPost(majCom: string) { // Retrieval of dashboard data
      return this.http.get<{ id: string; majCom: string;
                            reportDate: string;
                            totalSpend: number; 
                            sbSpend: number; 
                            newSbSpend: number;
                            otsbSpend: number;
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
                            // SB-OTSB breakdowns
                            // otsbProd_16: number; otsbServ_16: number; sbProd_16: number; sbServ_16: number;
                            otsbProd_17: number; otsbServ_17: number; sbProd_17: number; sbServ_17: number;
                            otsbProd_18: number; otsbServ_18: number; sbProd_18: number; sbServ_18: number;
                            otsbProd_19: number; otsbServ_19: number; sbProd_19: number; sbServ_19: number;
                            otsbProd_20: number; otsbServ_20: number; sbProd_20: number; sbServ_20: number;
                            lakeAward: number;
                            ndaaAward: number;
                            // sbCovid: number;
                            // totalCovid: number;

                            }>(
      "http://192.168.1.29:9876/api/dash_fy20/" + majCom // Development API location 
    );
  }
  public goal: Goal[] = []; // Empty array 

  getGoal(majCom: string) { // Retrieval of dashboard data
    return this.http.get<{ id: string; 
      importDt: string;
      majCom: string; totalSpend: number;  
      sbSpend: number;
      percSb: number;  sbGoal: number;
      sbStatus: string;
      sbColor: string;
      sdbSpend: number;
      sdbPerc: number;
      sdbGoal: number;
      sdbStatus: string;
      sdbColor: string;
      sdvoSpend: number;
      sdvoPerc: number;
      sdvoGoal: number;
      sdvoStatus: string;
      sdvoColor: string;
      wosbSpend: number;
      wosbPerc: number;
      wosbGoal: number;
      wosbStatus: string;
      wosbColor: string;
      hubzoneSpend: number;
      hubzonePerc: number;
      hubzoneGoal: number;
      hubzoneStatus: string;
      hubzoneColor: string;
      numMet: string;
      numMetAvg: string;
      numMetProj: string;
      }>(
        "http://192.168.1.29:9876/api/goal_fy20/" + majCom // Development API location 
      );
    }};


// };

// export class GoalsService {

//   constructor(private http: HttpClient, private router: Router) {}

//   public goal: Goal[] = []; // Empty array 

//   getGoal(majCom: string) { // Retrieval of dashboard data
//     return this.http.get<{ id: string; majCom: string; totalSpend: number;  
//       sbSpend: number;
//       sbPerc: number;  sbGoal: number;
//       sbStatus: string;
//       sdbSpend: number;
//       sdbPerc: number;
//       sdbGoal: number;
//       sdbStatus: string;
//       sdvoSpend: number;
//       sdvoPerc: number;
//       sdvoGoal: number;
//       sdvoStatus: string;
//       wosbSpend: number;
//       wosbPerc: number;
//       wosbGoal: number;
//       wosbStatus: string;
//       hubzoneSpend: number;
//       hubzonePerc: number;
//       hubzoneGoal: number;
//       hubzoneStatus: string;
//       }>(
//         "http://localhost:9876/api/goal_fy19/" + majCom // Development API location 
//       );
//     }};
