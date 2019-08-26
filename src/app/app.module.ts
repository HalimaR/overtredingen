import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ZoekenComponent } from './zoeken/zoeken.component';
import { ResultopnameplaatsComponent } from './resultopnameplaats/resultopnameplaats.component';
import { ResultaantalComponent } from './resultaantal/resultaantal.component';
import { ListComponent } from './list/list.component';
import {OvertredingService } from './service/overtreding.service';

@NgModule({
  declarations: [
    AppComponent,
    ZoekenComponent,
    ResultopnameplaatsComponent,
    ResultaantalComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OvertredingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
