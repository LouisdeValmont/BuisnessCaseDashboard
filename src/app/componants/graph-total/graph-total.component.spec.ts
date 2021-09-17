import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTotalComponent } from './graph-total.component';

describe('GraphTotalComponent', () => {
  let component: GraphTotalComponent;
  let fixture: ComponentFixture<GraphTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
