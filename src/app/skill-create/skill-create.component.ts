import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog/dialog.component';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-skill-create',
  templateUrl: './skill-create.component.html',
  styleUrls: ['./skill-create.component.css'],
})

export class SkillCreateComponent implements OnInit {
  skillDetails = { name: '', level: '', practise: '' };


  constructor(public dialog: MatDialog, public restApi: RestApiService, public router: Router) {

  }
  ngOnInit() { }
  addSkill() {
    this.restApi.createSkill(this.skillDetails).subscribe((data: {}) => {
      this.router.navigate(['/skill-list']);
    });
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }


}