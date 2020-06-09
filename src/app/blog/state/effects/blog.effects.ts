import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BlogService } from '../../blog.service';
import * as blogActions from '../actions/blog.actions';

@Injectable({
  providedIn: 'root'
})
export class BlogEffects {
  public getBlogs$ = createEffect(() => this.actions$.pipe(
    ofType(blogActions.getBlogs),
    switchMap(() => this.service.getBlogs().pipe(
      map(response => blogActions.getBlogsSuccess({ blogs: response })),
      catchError(error => of(blogActions.getBlogsFailed({ errors: [error] })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private service: BlogService
  ) { }
}
