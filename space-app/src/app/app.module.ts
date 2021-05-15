import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';
//import { EngineersRoomComponent} from './space/engineers-room/engineers-room.component';

@NgModule({
  declarations: [
    AppComponent,
    //EngineersRoomComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
