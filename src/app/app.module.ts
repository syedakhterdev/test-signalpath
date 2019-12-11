import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DataTableModule} from "angular2-datatable";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionsComponent } from './missions/missions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { APIService } from './api.service';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({declarations: [
    AppComponent,
    MissionsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTableModule,
    RouterModule.forRoot([
      { path: '', component: MissionsComponent }
    ])
  ],
  providers: [APIService,Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
