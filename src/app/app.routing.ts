import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Route[] = [{
  path: '',
  component: WelcomeComponent
}, {
  path: 'feature-one',
  loadChildren: './lazy-feature-one/lazy-feature-one.module#LazyFeatureOneModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
