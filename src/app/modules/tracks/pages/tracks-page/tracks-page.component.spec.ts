import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrackService } from '@modules/tracks/services/track.service';
import { TracksPageComponent } from './tracks-page.component';

describe('TracksPageComponent', () => {
  let service: TrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(TrackService);
    
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
