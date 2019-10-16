import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {User} from '../modele/user';
import {map} from 'rxjs/operators';

@Injectable()

export class UserService {

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<User> {
    return this.http.get(' https://api.slstice.com/mock/users/' + username + '?api_key=c55sEjfnP3LgEHDMeWn9')
      .pipe(
        map(
        data => {
          const user = data['response']['user'];
          return new User(user['id'], user['username'], user['first_name'], user['last_name'], user['profile_images']['medium']);
        })
      );
  }

}
