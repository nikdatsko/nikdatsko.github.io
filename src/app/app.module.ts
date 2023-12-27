import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
