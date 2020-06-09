import { createAction, props } from '@ngrx/store';

export const getBlogs = createAction(
  '[Blog] Get Blogs'
);

export const getBlogsSuccess = createAction(
  '[Blog] Get Blogs Success',
  props<{ blogs: any }>()
);

export const getBlogsFailed = createAction(
  '[Blog] Get Blogs Failed',
  props<{ errors: any[] }>()
);
