import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  skillData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.restApi.getSkill(this.id).subscribe((data: {}) => {
      this.skillData = data;
    })
  }
  // Update skill data
  updateSkill() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateSkill(this.id, this.skillData).subscribe(data => {
        this.router.navigate(['/skill-list'])
      })
    }
  }
}