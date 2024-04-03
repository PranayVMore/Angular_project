import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let profile =localStorage.getItem('Loginuser')
  if(profile == "Admin"){
    return true
  }
  else{
    window.alert("Access Denied!")
    return false;
  }




};
