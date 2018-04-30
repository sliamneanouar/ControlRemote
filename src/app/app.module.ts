import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Component, OnInit, ModuleWithProviders } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Router, Routes, RouterModule} from '@angular/router';
import { NevbarLeftComponent } from './Navbar/nevbar-left/nevbar-left.component';
import { NavbarRightComponent } from './Navbar/navbar-right/navbar-right.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
    // {path: 'navbar', component: NavbarComponent},
    // {path: '', component: AppComponent}
];
const appRoutingProviders: any[] = [];
const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NevbarLeftComponent,
    NavbarRightComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
