// Post model, including Objects 
export class Post {
  id: string;
  majCom: string;
  reportDate: string;
  totalSpend: number;
  sbSpend: number;
  otsbSpend: number;
  percSb: number;
  spendBreak: object; // Object for use in ngx-charts
  goalSb: number;
  maxSb: number; 
  percSdb: number;
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
  cardColor: object; // Object for use in ngx-charts
  cardSpend: object; // Object for use in ngx-charts
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
  portGroups: object; // Object for use in ngx-charts
  otsbProd_16: number;
  otsbServ_16: number;
  sbProd_16: number;
  sbServ_16: number;
  otsbProd_17: number;
  otsbServ_17: number;
  sbProd_17: number;
  sbServ_17: number;
  otsbProd_18: number;
  otsbServ_18: number;
  sbProd_18: number;
  sbServ_18: number;
  otsbProd_19: number;
  otsbServ_19: number;
  sbProd_19: number;
  sbServ_19: number;
  breakAward: object; // Object for use in ngx-charts
};

export class Goal {
  id: string;
  importDt: string;
  majCom: string;
  totalSpend: number;
  sbSpend: number;
  sbPerc: number;
  sbGoal: number;
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
};