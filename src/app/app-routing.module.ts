import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MajcomComponent } from "./posts/majcom/majcom.component";
import { SplashComponent } from "./posts/splash/splash.component";
import { SumTabComponent } from "./posts/sum-tab/sum-tab.component"; 
// import { PrintPageComponent } from './posts/print-page/print-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/performance', pathMatch: 'full' },
  { path: 'performance', component: SplashComponent },
  { path: 'sb_dash_fy19/:majCom', component: MajcomComponent },
  { path: 'sumTab/:majCom', component: SumTabComponent },
  // { path: 'map', redirectTo: '/spendMaps', pathMatch: 'full'},
  // { path: 'spendMaps', component: MapComponent },
  // { path: 'print',  outlet: 'print',  component: PrintDashComponent,
  //   children: [
  //     {path: 'sb_dash_fy19/:majCom', component: MajcomComponent}
  //   ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
