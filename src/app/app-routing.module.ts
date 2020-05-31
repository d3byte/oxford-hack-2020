import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'topics',
    loadChildren: () => import('./topics/topics.module').then(m => m.TopicsModule),
  },
  {
    path: 'topics/1',
    loadChildren: () => import('./current-topic/current-topic.module').then(m => m.CurrentTopicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
