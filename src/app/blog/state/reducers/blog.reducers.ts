import { createReducer, on, Action } from '@ngrx/store';
import { Blog } from '../../models/blog';
import * as blogActions from '../actions/blog.actions';

export interface BlogState {
  isSuccess: boolean;
  isLoading: boolean;
  blogs: Blog[];
}

export const initialState: BlogState = {
  isLoading: false,
  isSuccess: false,
  blogs: []
};

const blogReducer = createReducer(
  initialState,
  on(blogActions.getBlogs, state => (
    {
      ...state,
      isLoading: true,
      isSuccess: false
    }
  )),
  on(blogActions.getBlogsSuccess, (state, props) => (
    {
      ...state,
      blogs: props.blogs,
      isLoading: false,
      isSuccess: true
    }
  )),
  on(blogActions.getBlogsFailed, state => (
    {
      ...state,
      isLoading: false,
      isSuccess: false
    }
  ))
);

export function reducer(state: BlogState, action: Action) {
  return blogReducer(state, action);
}
