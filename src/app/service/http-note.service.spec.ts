import { TestBed } from '@angular/core/testing';

import { HttpNoteService } from './http-note.service';

describe('HttpNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpNoteService = TestBed.get(HttpNoteService);
    expect(service).toBeTruthy();
  });
});
