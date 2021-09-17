import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalGlobaleComponent } from './total-globale.component';

describe('TotalGlobaleComponent', () => {
  let component: TotalGlobaleComponent;
  let fixture: ComponentFixture<TotalGlobaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalGlobaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalGlobaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
