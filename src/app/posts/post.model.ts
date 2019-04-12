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
};

