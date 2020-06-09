import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Blog } from '../../models/blog';
import { selectBlogs } from '../../state/selectors/blog.selectors';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs$: Observable<Blog[]>;

  constructor(
    private store: Store
  ) {
    this.blogs$ = store.select(selectBlogs);
  }

  ngOnInit(): void {
  }

}
