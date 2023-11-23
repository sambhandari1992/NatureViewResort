import { Injectable } from '@angular/core';
import * as coreValueDataJSON from '../../../assets/json/about/core-value.json';
import * as teamMembersJSON from '../../../assets/json/about/about-team.json';


@Injectable({
  providedIn: 'root',
})
export class AboutPageService {

  constructor() {}
  get allCoreValues() {
    return coreValueDataJSON;
  }

  get allTeamMembers() {
    return teamMembersJSON;
  }
  
}