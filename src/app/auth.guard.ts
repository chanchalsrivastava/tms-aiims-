import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // if(localStorage.getItem('token')){
  
  // }
  return localStorage.getItem('token')?true:false;
};
