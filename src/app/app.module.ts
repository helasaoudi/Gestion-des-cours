import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AddCourComponent } from './add-cour/add-cour.component';
import { NgOptimizedImage } from '@angular/common';
import { EditCourComponent } from './edit-cour/edit-cour.component';
import { LandingPageComponent } from './landing-page/landing-page.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminInterfaceComponent,
    AddCourComponent,
    EditCourComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NgOptimizedImage,
    NzCarouselModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
