import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { StoreModule } from '@ngrx/store';
import { LazyFeatureOneRoutingModule } from './lazy-feature.routing';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(LazyFeatureOneModule.constructor.name, {}),
    LazyFeatureOneRoutingModule
  ],
  declarations: [HelloComponent]
})
export class LazyFeatureOneModule { }
