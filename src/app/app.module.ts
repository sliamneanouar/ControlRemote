import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Component, OnInit, ModuleWithProviders } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Router, Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    // {path: 'navbar', component: NavbarComponent},
    // {path: '', component: AppComponent}
];
const appRoutingProviders: any[] = [];
const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
