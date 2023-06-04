import { Injectable } from '@angular/core';
import * as navData from '../../assets/json/nav.json';
import * as loginInfoData from '../../assets/json/login-info.json';
import * as fancyWordData from '../../assets/json/fancy-word.json';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private navItemsJSON = navData;
  private loginInfoJSON = loginInfoData;
  private fancyWordsJSON = fancyWordData;

  constructor() {}

  get navItems() {
    return this.navItemsJSON;
  }
  get loginInfo() {
    return this.loginInfoJSON;
  }
  get fancyWords() {
    return this.fancyWordsJSON;
  }
}
