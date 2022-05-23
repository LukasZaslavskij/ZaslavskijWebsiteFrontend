import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
})
export class SkillListComponent implements OnInit {
  Skill: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadSkills();
  }
  // Get skills list
  loadSkills() {
    return this.restApi.getSkills().subscribe((data: {}) => {
      this.Skill = data;
    });
  }
  // Delete skill
  deleteSkill(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteSkill(id).subscribe((data) => {
        this.loadSkills();
      });
    }
  }
}