import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphProduitsComponent } from './graph-produits.component';

describe('GraphProduitsComponent', () => {
  let component: GraphProduitsComponent;
  let fixture: ComponentFixture<GraphProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
