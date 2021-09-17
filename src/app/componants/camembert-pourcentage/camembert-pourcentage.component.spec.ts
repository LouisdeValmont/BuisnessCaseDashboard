import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamembertPourcentageComponent } from './camembert-pourcentage.component';

describe('CamembertPourcentageComponent', () => {
  let component: CamembertPourcentageComponent;
  let fixture: ComponentFixture<CamembertPourcentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamembertPourcentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamembertPourcentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
