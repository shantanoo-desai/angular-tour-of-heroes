import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent} from './hero-search.component';

import {AppRoutingModule} from './app-routing.module';

// in memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api/in-memory-web-api.module';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
