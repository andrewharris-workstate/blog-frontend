import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { BlogState } from '../reducers/blog.reducers';

export const blogFeatureName = 'blog';

export const selectBlog = createFeatureSelector<AppState, BlogState>(blogFeatureName);

export const selectBlogs = createSelector(selectBlog, state => state.blogs);
