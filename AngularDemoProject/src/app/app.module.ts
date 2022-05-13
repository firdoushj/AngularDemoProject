import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ResourceComponent } from './resource/resource.component';
import { NextstepsComponent } from './nextsteps/nextsteps.component';
import { FooterComponent } from './common/footer/footer.component';
import { LinksComponent } from './links/links.component';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourceComponent,
    NextstepsComponent,
    FooterComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
