import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { dirtycheckGuard } from './dirtycheck.guard';

describe('dirtycheckGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dirtycheckGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
