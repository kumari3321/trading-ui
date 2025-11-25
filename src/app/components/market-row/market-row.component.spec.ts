import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRowComponent } from './market-row.component';

describe('MarketRowComponent', () => {
  let component: MarketRowComponent;
  let fixture: ComponentFixture<MarketRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
