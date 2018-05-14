import { TestBed, inject } from '@angular/core/testing';

import { MooviedbService } from './mooviedb.service';

describe('MooviedbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MooviedbService]
    });
  });

  it('should be created', inject([MooviedbService], (service: MooviedbService) => {
    expect(service).toBeTruthy();
  }));
});
