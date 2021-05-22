import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';
import { HttpClientModule } from '@angular/common/http';
import { SpaceImageDirective } from './shared/space-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpaceImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaceModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SpaceImageDirective
  ]
})
export class AppModule { }
