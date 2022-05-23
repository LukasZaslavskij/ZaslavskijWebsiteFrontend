import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-skill-create',
  templateUrl: './skill-create.component.html',
  styleUrls: ['./skill-create.component.css'],
})
export class skillCreateComponent implements OnInit {
  @Input() skillDetails = { name: '', level: '', practise: '' };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addSkill(dataSkill: any) {
    this.restApi.createSkill(this.skillDetails).subscribe((data: {}) => {
      this.router.navigate(['/skill-list']);
    });
  }
}