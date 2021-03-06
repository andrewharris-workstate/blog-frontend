import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/components/blog/blog.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog'
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
