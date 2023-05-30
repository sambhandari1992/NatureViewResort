import { Injectable } from '@angular/core';
import * as navData from '../../assets/nav.json'
import * as loginInfoData from '../../assets/login-info.json'



@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private navItemsJSON = navData;
  private loginInfoJSON = loginInfoData;


  

  constructor() { }

  get navItems() {
    return this.navItemsJSON;
}
  get loginInfo() {
    return this.loginInfoJSON;
}
}