import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketNavBarComponent } from './market-nav-bar.component';

describe('MarketNavBarComponent', () => {
  let component: MarketNavBarComponent;
  let fixture: ComponentFixture<MarketNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
