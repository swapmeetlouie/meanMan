import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from "@angular/material";

import 'bootstrap/dist/js/bootstrap.bundle';
import { AppComponent } from "./app.component";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { HeaderComponent } from "./posts/header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { MajcomComponent } from './posts/majcom/majcom.component';
import { FooterComponent } from './posts/footer/footer.component';
import { SplashComponent } from './posts/splash/splash.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MajcomComponent,
    FooterComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    NgxChartsModule,
    NgxGaugeModule,
    HttpClientModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
