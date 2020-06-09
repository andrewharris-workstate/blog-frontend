import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Blog } from './models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private endpoint = `${environment.backendHost}/blog`;

  constructor(
    private http: HttpClient
  ) { }

  public getBlogs() {
    return this.http.get<Blog[]>(this.endpoint);
  }
}
