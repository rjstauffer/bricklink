import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronStudioComponent } from './jumbotron-studio.component';

describe('JumbotronStudioComponent', () => {
  let component: JumbotronStudioComponent;
  let fixture: ComponentFixture<JumbotronStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbotronStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumbotronStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
