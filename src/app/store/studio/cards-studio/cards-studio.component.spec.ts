import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStudioComponent } from './cards-studio.component';

describe('CardsStudioComponent', () => {
  let component: CardsStudioComponent;
  let fixture: ComponentFixture<CardsStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
