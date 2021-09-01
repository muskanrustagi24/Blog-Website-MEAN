import { TestBed } from '@angular/core/testing';

import { BlogDetailGuard } from './blog-detail.guard';

describe('BlogDetailGuard', () => {
  let guard: BlogDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlogDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
