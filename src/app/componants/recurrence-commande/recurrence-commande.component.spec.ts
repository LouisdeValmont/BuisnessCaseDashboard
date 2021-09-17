import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrenceCommandeComponent } from './recurrence-commande.component';

describe('RecurrenceCommandeComponent', () => {
  let component: RecurrenceCommandeComponent;
  let fixture: ComponentFixture<RecurrenceCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurrenceCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrenceCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
