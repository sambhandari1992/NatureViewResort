import { Injectable } from '@angular/core';
import * as navData from '../../assets/json/nav.json';
import * as loginInfoData from '../../assets/json/login-info.json';
import * as homeInfiData from '../../assets/json/home-about.json';
import * as fancyWordData from '../../assets/json/fancy-word.json';
import * as contactInfoData from '../../assets/json/contact-info.json'
import * as testimonialsData from '../../assets/json/testimonials.json';


@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private contactInfoJSON = contactInfoData;

  constructor() {}

  get navItems() {
    return navData;
  }
  get loginInfo() {
    return loginInfoData;
  }
  get homeAboutInfo() {
    return homeInfiData;
  }
  get fancyWords() {
    return fancyWordData;
  }
  get contactInfo() {
    return this.contactInfoJSON.contactInfo;
  }
  get testimonials() {
    return testimonialsData;
  }
  
}