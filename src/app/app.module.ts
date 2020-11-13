import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {HomeworkService} from '../services/homework.service';
import {FormsModule} from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListItemComponent } from './hero-list/hero-list-item/hero-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroListComponent,
    HeroListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HomeworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
