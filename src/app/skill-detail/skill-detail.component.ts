import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../shared/experience';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  expId: number | undefined = undefined;
  action: string | undefined = undefined;
  exps: any = {};
  skillDetail: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }
  ngOnInit() {
    this.restApi.getSkill(this.id).subscribe((data: {}) => {
      this.skillDetail = data;
      console.log(this.skillDetail.experiences);
    }
    )
  }
  updateExperience() {
    if (window.confirm('Are you sure, you want to update experience?')) {
      this.restApi.updateExperience(this.expId!, this.exps).subscribe(data => {
      })
    }
    this.action = undefined
    location.reload();
  }

  addExperience() {
    console.log(this.exps, this.id)
    this.restApi.createExperience(this.exps, this.id).subscribe(data => {
    })
    this.action = undefined
    location.reload();
  }

  deleteExperience() {
    this.restApi.deleteExperience(this.expId!).subscribe(data => {
    })
    location.reload();
  }

}
