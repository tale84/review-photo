import { HttpClient } from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Injectable} from '@angular/core';
import { Post } from '../modele/post';
import { map } from 'rxjs/operators';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) {
  }

  public getPost(): Observable<Post[]> {
    return this.http.get('https://api.slstice.com/mock/posts?offset=0&limit=10&api_key=c55sEjfnP3LgEHDMeWn9')
      .pipe(
        map(
          (jsonArray: object[]) => {
            return jsonArray['response']['posts'].map(jsonItem => Post.fromJson(jsonItem));
          }
        )
      );
  }
}


