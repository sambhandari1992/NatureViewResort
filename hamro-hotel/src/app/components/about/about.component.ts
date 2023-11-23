import { Component, OnInit } from '@angular/core';
import { TeamMembersInterface } from './about-page.interface/team-members.interface';

import jsonData from '../../../assets/json/about/about.json';
import { MainData } from './about-page.interface/about.interface'; // Import the MainData interface

import { CoreValueInterface } from './about-page.interface/core-values.interface';
import { AboutPageService } from '../../services/about/about-page.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    mainData: MainData = jsonData as MainData;

    coreValues: CoreValueInterface[] = [];
    teams: TeamMembersInterface[] = [];

    constructor(private aboutPageService: AboutPageService) {}

    ngOnInit(): void {
        this.loadTeamMembers();
        this.loadCoreValues();
    }

    loadTeamMembers() {
        this.teams = this.aboutPageService.allTeamMembers.teamMembersData;
    }

    loadCoreValues() {
        this.coreValues = this.aboutPageService.allCoreValues.coreValuesData;
    }
}
