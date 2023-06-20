import { Injectable } from '@angular/core';
import * as navData from '../../assets/json/nav.json';
import * as loginInfoData from '../../assets/json/login-info.json';
import * as fancyWordData from '../../assets/json/fancy-word.json';
import * as contactInfoData from '../../assets/json/contact-info.json'
import * as testimonialsData from '../../assets/json/testimonials.json';


@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private navItemsJSON = navData;
  private loginInfoJSON = loginInfoData;
  private fancyWordsJSON = fancyWordData;
  private contactInfoJSON = contactInfoData;
  private testimonialsJSON = testimonialsData;



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
  get contactInfo() {
    return this.contactInfoJSON.contactInfo;
  }
  get testimonials() {
    return this.testimonialsJSON;
  }
  
}