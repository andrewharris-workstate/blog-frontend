import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers/blog.reducers';
import { blogFeatureName } from './state/selectors/blog.selectors';
import { BlogService } from './blog.service';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './state/effects/blog.effects';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    BlogRoutingModule.components
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    StoreModule.forFeature(blogFeatureName, reducer),
    EffectsModule.forFeature([BlogEffects])
  ],
  providers: [BlogService]
})
export class BlogModule { }
