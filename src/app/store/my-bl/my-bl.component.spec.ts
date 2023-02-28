import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBLComponent } from './my-bl.component';

describe('MyBLComponent', () => {
  let component: MyBLComponent;
  let fixture: ComponentFixture<MyBLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
