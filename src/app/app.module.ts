import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducer, State, StoreModule } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { mainReducer } from './ngrx/main.reducer';
import { WelcomeComponent } from './welcome/welcome.component';

export function logger(reducer): any {
  return storeLogger()(reducer);
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      main: mainReducer,
    },
    {
      metaReducers: [logger]
    }),


    AppRoutingModule,

    // TODO
    // Using @ngrx/store-devtools is causing an error
    // issue is already reported
    // see: https://github.com/ngrx/platform/issues/624
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
