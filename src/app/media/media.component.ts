import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Photo} from '../modele/photo';
import {MediaService} from '../service/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit, OnDestroy  {

  private subscription: Subscription;
  @Input() mediaId: string;
  media: Photo;

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.subscription = this.mediaService.getMedia(this.mediaId).subscribe(
      (data: Photo) => {
        this.media = data;
      },
      err => {}
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
