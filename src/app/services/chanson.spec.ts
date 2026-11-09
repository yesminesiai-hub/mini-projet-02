import { TestBed } from '@angular/core/testing';
import { ChansonService } from './chanson';

describe('ChansonService', () => {
  let service: ChansonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChansonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});