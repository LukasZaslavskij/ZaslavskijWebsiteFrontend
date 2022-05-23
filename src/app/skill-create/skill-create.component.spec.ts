import { ComponentFixture, TestBed } from '@angular/core/testing';

import { skillCreateComponent } from './skill-create.component';

describe('skillCreateComponent', () => {
  let component: skillCreateComponent;
  let fixture: ComponentFixture<skillCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ skillCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(skillCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
