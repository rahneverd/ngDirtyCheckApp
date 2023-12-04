import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ComponentCanDeactivate } from './component-can-deactivate';

export const dirtycheckGuard: CanDeactivateFn<ComponentCanDeactivate> = (
  component: ComponentCanDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState
) => {
  if (component.canDeactivate()) {
    return true;
  } else {
    return confirm(
      'You have unsaved changes in your form. Do you want to go to that page?'
    );
  }
};
