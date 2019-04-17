// Dependencies 
import { Component, OnInit, ViewEncapsulation, NgModule } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGaugeModule } from 'ngx-gauge';

@Component({
  selector: 'app-majcom',
  templateUrl: './majcom.component.html',
  styleUrls: ['./majcom.component.css'],
  encapsulation: ViewEncapsulation.None
})

@NgModule({
  imports: [
    NgxChartsModule,
    NgxGaugeModule
   ]
})

export class MajcomComponent implements OnInit {

  // Gauge setting for ngx-gauge 
  gaugeSize='235';

//   breakAward = [ { 'name': 'FY16', 'series': [ {'name': 'OTSB Products', 'desc': 'FY16 YTD', 'value': 1687.164012},{'name': 'OTSB Services', 'desc': 'FY16 YTD', 'value': 985.738968},{'name': 'SB Products', 'desc': 'FY16 YTD', 'value': 157.407110},{'name': 'SB Services', 'desc': 'FY16 YTD', 'value': 435.915357},
// ]},{ 'name': 'FY17', 'series': [ {'name': 'OTSB Products', 'desc': 'FY17 YTD', 'value': 1630.877999},{'name': 'OTSB Services', 'desc': 'FY17 YTD', 'value': 738.550426},{'name': 'SB Products', 'desc': 'FY17 YTD', 'value': 160.669202},{'name': 'SB Services', 'desc': 'FY17 YTD', 'value': 374.059644},
// ]},{ 'name': 'FY18', 'series': [ {'name': 'OTSB Products', 'desc': 'FY18 YTD', 'value': 1885.976938},{'name': 'OTSB Services', 'desc': 'FY18 YTD', 'value': 779.931457},{'name': 'SB Products', 'desc': 'FY18 YTD', 'value': 159.601471},{'name': 'SB Services', 'desc': 'FY18 YTD', 'value': 385.699457},
// ]},{ 'name': 'FY19', 'series': [ {'name': 'OTSB Products', 'desc': 'FY19 YTD', 'value': 1951.254336},{'name': 'OTSB Services', 'desc': 'FY19 YTD', 'value': 878.560032},{'name': 'SB Products', 'desc': 'FY19 YTD', 'value': 183.090613},{'name': 'SB Services', 'desc': 'FY19 YTD', 'value': 423.756270}]}]

  post: Post;
  isLoading = false;
  public majCom: string;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
  ) {}

  // Percentage breakdowns for advanced pie chart 
  percFormat(value) {
    return value.toFixed(2);
  }

  // Dollar format for advanced pie chart
  sbFormat(value) {
    const v = value/1000000;
    if (v > 1000) {
      return '$' + (v/1000).toFixed(2) + 'B';    
    }
    else if (v == 1000)  {
      return '$' + (v/1000).toFixed(0) + 'B';  
    }
    else {
      return '$' + v.toFixed(2) + 'M';
    }
  }

  // Portfolio Value formatting.  Due to $1B totals need second else-if
  portFormat(value) {
    var v = (value).toFixed(2);
    if (v > 1000) {
      return '$' + (v/1000).toFixed(2) + 'B'
    }
    else if (v == 1000) {
      return '$' + (v/1000).toFixed(0) + 'B'
    }
    else { 
      return '$' + (v*1).toFixed(0) + 'M';
    }
  }
   
  // SB-OTSB Product-Service formatting
  treeFormat(value): string {
    const bil = value;
    if (bil>10000) {
      return '$' + (bil / 1000).toFixed(0) + 'B';
    }
    else if (bil<2000 && bil>1000) {
      return '$' + (bil / 1000).toFixed(1) + 'B';
    }
    else if (bil < 1000) {
      return '$' + bil.toFixed(0) + 'M';
    } 
    else if ((bil == 1000 || bil == 2000 ||
              bil == 3000 || bil == 4000 ||
              bil == 5000 || bil == 6000 ||
              bil == 7000 || bil == 8000 ||
              bil == 9000) 
          && bil < 10000)  {
      return '$' + (bil/1000).toFixed(0) + 'B';
    } else {
      return '$' + (bil / 1000).toFixed(1) + 'B';
    }
  }
  
  // Money card award format 
  dollarValueFormat(val): string {
    return `\$${val.value.toLocaleString()}`;
  }
  
  // Temporary error fix for ngx-charts
  noResult(value): string {
    return null;
  }
  
  // Color Schemes 
  // SB vs OTSB breakdown
  colorScheme = {
    domain: ['#2E3EE2', // blue 
             '#DC5A2E'] // orange 
  };
  
  // SB vs OTSB - Product vs Services 
  breakScheme = {
    domain: ['#2E3EE2', // royal blue 
             '#BABEE4', // lighter blue
             '#DC5A2E', // orange 
             '#D1886F'] // lighter orange 
  };
  
  // Portfolio Value breakdowns 
  portScheme = {
    domain: ['#f39c12', // orange
             '#34495e', // slate blue
             '#5d4037', // brown
             '#1b5e20', // dark green
             '#2980b9', // sky blue
            //  '#b33939', // red
            //  '#000033', // dark blue
             '#e0e0e0', // white
             '#95a5a6', // light gray
             '#1abc9c', // teal
             '#9b59b6'] // purple
  };

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("majCom")) {
        this.majCom = paramMap.get("majCom");
        this.isLoading = true;
        this.postsService.getPost(this.majCom).subscribe(postData => {
          this.isLoading = false;
          this.post = {
            id: postData.id, 
            majCom: postData.majCom, 
                      reportDate: postData.reportDate,
                      totalSpend: postData.totalSpend, 
                      sbSpend: postData.sbSpend, otsbSpend: postData.otsbSpend, percSb: postData.percSb,
                      spendBreak: [{'name': 'Other Than SB', 'value':postData.otsbSpend},{'name': 'Small Business', 'value':postData.sbSpend}],
                      goalSb: postData.goalSb, 
                      maxSb: postData.maxSb, 
                      percSdb: postData.percSdb,
                      goalSdb: postData.goalSdb,
                      maxSdb: postData.maxSdb,
                      percSdvo: postData.percSdvo,
                      goalSdvo: postData.goalSdvo,
                      maxSdvo: postData.maxSdvo,
                      percWosb: postData.percWosb,
                      goalWosb: postData.goalWosb,
                      maxWosb: postData.maxWosb,
                      percHubzone: postData.percHubzone,
                      goalHubzone: postData.goalHubzone,
                      maxHubzone: postData.maxHubzone,
                      sdbSpend: postData.sdbSpend, 
                      sdvoSpend: postData.sdvoSpend, 
                      wosbSpend: postData.wosbSpend, 
                      hubzoneSpend: postData.hubzoneSpend,                                                                 
                      cardSpend: [{'name': 'Small Business', 'value': postData.sbSpend},
                                  {'name': 'Small Disadvantaged', 'value': postData.sdbSpend},
                                  {'name': 'Service-Disabled', 'value': postData.sdvoSpend},
                                  {'name': 'Women Owned', 'value': postData.wosbSpend},
                                  {'name': 'HUBZone', 'value': postData.hubzoneSpend}],
                      sbColor: postData.sbColor,
                      sdbColor: postData.sdbColor,
                      sdvoColor: postData.sdvoColor,
                      wosbColor: postData.wosbColor,
                      hubzoneColor: postData.hubzoneColor,
                      cardColor: {domain:[postData.sbColor,postData.sdbColor,postData.sdvoColor,postData.wosbColor,postData.hubzoneColor]},
                      portName1: postData.portName1,
                      portValue1: postData.portValue1,  
                      portName2: postData.portName2,
                      portValue2: postData.portValue2,  
                      portName3: postData.portName3,
                      portValue3: postData.portValue3,  
                      portName4: postData.portName4,
                      portValue4: postData.portValue4,  
                      portName5: postData.portName5,
                      portValue5: postData.portValue5,  
                      portName6: postData.portName6,
                      portValue6: postData.portValue6,  
                      portGroups: [{'name': postData.portName1, 'value': postData.portValue1},
                                   {'name': postData.portName2, 'value': postData.portValue2},
                                   {'name': postData.portName3, 'value': postData.portValue3},
                                   {'name': postData.portName4, 'value': postData.portValue4},
                                  //  {'name': postData.portName5, 'value': postData.portValue5},
                                  //  {'name': postData.portName6, 'value': postData.portValue6},
                                  ],
                      otsbProd_16: postData.otsbProd_16,
                      otsbServ_16: postData.otsbServ_16,
                      sbProd_16: postData.sbProd_16,
                      sbServ_16: postData.sbServ_16,
                      otsbProd_17: postData.otsbProd_17,
                      otsbServ_17: postData.otsbServ_17,
                      sbProd_17: postData.sbProd_17,
                      sbServ_17: postData.sbServ_17,
                      otsbProd_18: postData.otsbProd_18,
                      otsbServ_18: postData.otsbServ_18,
                      sbProd_18: postData.sbProd_18,
                      sbServ_18: postData.sbServ_18,
                      otsbProd_19: postData.otsbProd_19,
                      otsbServ_19: postData.otsbServ_19,
                      sbProd_19: postData.sbProd_19,
                      sbServ_19: postData.sbServ_19,
                      breakAward: [ 
                        {'name': 'FY16', 'series': [
                          {'name': 'OTSB Products', 'desc': 'FY16 YTD', 'value': postData.otsbProd_16},
                          {'name': 'OTSB Services', 'desc': 'FY16 YTD', 'value': postData.otsbServ_16},
                          {'name': 'SB Products', 'desc': 'FY16 YTD', 'value': postData.sbProd_16},
                          {'name': 'SB Services', 'desc': 'FY16 YTD', 'value': postData.sbServ_16}
                        ]},
                        {'name': 'FY17', 'series': [
                          {'name': 'OTSB Products', 'desc': 'FY17 YTD', 'value': postData.otsbProd_17},
                          {'name': 'OTSB Services', 'desc': 'FY17 YTD', 'value': postData.otsbServ_17},
                          {'name': 'SB Products', 'desc': 'FY17 YTD', 'value': postData.sbProd_17},
                          {'name': 'SB Services', 'desc': 'FY17 YTD', 'value': postData.sbServ_17}
                        ]},
                        {'name': 'FY18', 'series': [
                          {'name': 'OTSB Products', 'desc': 'FY18 YTD', 'value': postData.otsbProd_18},
                          {'name': 'OTSB Services', 'desc': 'FY18 YTD', 'value': postData.otsbServ_18},
                          {'name': 'SB Products', 'desc': 'FY18 YTD', 'value': postData.sbProd_18},
                          {'name': 'SB Services', 'desc': 'FY18 YTD', 'value': postData.sbServ_18}
                        ]},
                        {'name': 'FY19', 'series': [
                          {'name': 'OTSB Products', 'desc': 'FY19 YTD', 'value': postData.otsbProd_19},
                          {'name': 'OTSB Services', 'desc': 'FY19 YTD', 'value': postData.otsbServ_19},
                          {'name': 'SB Products', 'desc': 'FY19 YTD', 'value': postData.sbProd_19},
                          {'name': 'SB Services', 'desc': 'FY19 YTD', 'value': postData.sbServ_19}
                        ]}
                      ]                                   
        }
      });

      } else {
        this.majCom = null;
      }
    });
  };
};

