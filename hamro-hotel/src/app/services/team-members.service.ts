import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TeamMembers } from '../components/about/team-members.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getTeamMembers(): Observable<TeamMembers[]> {
    return this.http.get<TeamMembers[]>('/assets/json/about/about-team.json');
  }
}

