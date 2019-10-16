import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Photo} from '../modele/photo';

@Injectable()
export class MediaService {

  constructor(private http: HttpClient) {}

  getMedia(mediaId: string): Observable<Photo> {
    return this.http.get('https://api.slstice.com/mock/medias/' + mediaId + '?api_key=c55sEjfnP3LgEHDMeWn9')
      .pipe(
        map(
          data => {
            const med = data['response']['media'];
            return new Photo(med['id'], med['urls']['small'], med['owner']['username']);
          })
      );
  }

}
