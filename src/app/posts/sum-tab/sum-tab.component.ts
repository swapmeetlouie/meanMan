// Dependencies 
import { Component, OnInit, ViewEncapsulation, NgModule } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Goal } from "../post.model";
import { PostsService } from "../posts.service";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-sum-tab',
  templateUrl: './sum-tab.component.html',
  styleUrls: ['./sum-tab.component.css'],
  encapsulation: ViewEncapsulation.None
})

@NgModule({
  imports: [
    NgxChartsModule,
    NgxGaugeModule,
    NgxPrintModule
   ]
})

export class SumTabComponent implements OnInit {

  // printPage() {
  //   window.print();
  // }

  // Gauge setting for ngx-gauge 
  // gaugeSize='235';

//   breakAward = [ { 'name': 'FY16', 'series': [ {'name': 'OTSB Products', 'desc': 'FY16 YTD', 'value': 1687.164012},{'name': 'OTSB Services', 'desc': 'FY16 YTD', 'value': 985.738968},{'name': 'SB Products', 'desc': 'FY16 YTD', 'value': 157.407110},{'name': 'SB Services', 'desc': 'FY16 YTD', 'value': 435.915357},
// ]},{ 'name': 'FY17', 'series': [ {'name': 'OTSB Products', 'desc': 'FY17 YTD', 'value': 1630.877999},{'name': 'OTSB Services', 'desc': 'FY17 YTD', 'value': 738.550426},{'name': 'SB Products', 'desc': 'FY17 YTD', 'value': 160.669202},{'name': 'SB Services', 'desc': 'FY17 YTD', 'value': 374.059644},
// ]},{ 'name': 'FY18', 'series': [ {'name': 'OTSB Products', 'desc': 'FY18 YTD', 'value': 1885.976938},{'name': 'OTSB Services', 'desc': 'FY18 YTD', 'value': 779.931457},{'name': 'SB Products', 'desc': 'FY18 YTD', 'value': 159.601471},{'name': 'SB Services', 'desc': 'FY18 YTD', 'value': 385.699457},
// ]},{ 'name': 'FY19', 'series': [ {'name': 'OTSB Products', 'desc': 'FY19 YTD', 'value': 1951.254336},{'name': 'OTSB Services', 'desc': 'FY19 YTD', 'value': 878.560032},{'name': 'SB Products', 'desc': 'FY19 YTD', 'value': 183.090613},{'name': 'SB Services', 'desc': 'FY19 YTD', 'value': 423.756270}]}]

  goal: Goal;
  isLoading = false;
  public majCom: string;

  constructor(
    public goalsService: PostsService,
    public route: ActivatedRoute
  ) {}

  

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("majCom")) {
        this.majCom = paramMap.get("majCom");
        this.isLoading = true;
        this.goalsService.getGoal(this.majCom).subscribe(goalData => {
          this.isLoading = false;
          this.goal = {
            id: goalData.id, 
            importDt: goalData.importDt,
            majCom: goalData.majCom,
            totalSpend: goalData.totalSpend, 
            sbSpend: goalData.sbSpend, 
            sbPerc: goalData.sbPerc,
            sbGoal: goalData.sbGoal,
            sbColor: goalData.sbColor,
            sbStatus: goalData.sbStatus,
            sdbSpend: goalData.sdbSpend,
            sdbPerc: goalData.sdbPerc,
            sdbGoal: goalData.sdbGoal,
            sdbStatus: goalData.sdbStatus,
            sdbColor: goalData.sdbColor,
            sdvoSpend: goalData.sdvoSpend,
            sdvoPerc: goalData.sdvoPerc,
            sdvoGoal: goalData.sdvoGoal,
            sdvoStatus: goalData.sdvoStatus,
            sdvoColor: goalData.sdvoColor,
            wosbSpend: goalData.wosbSpend,
            wosbPerc: goalData.wosbPerc,
            wosbGoal: goalData.wosbGoal,
            wosbStatus: goalData.wosbStatus,
            wosbColor: goalData.wosbColor,
            hubzoneSpend: goalData.hubzoneSpend,
            hubzonePerc: goalData.hubzonePerc,
            hubzoneGoal: goalData.hubzoneGoal,
            hubzoneStatus: goalData.hubzoneStatus,       
            hubzoneColor: goalData.hubzoneColor,          
      }
    });

      } else {
        this.majCom = null;
      }
    });
  };
};

