import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMISummeryComponent } from './emisummery.component';

describe('EMISummeryComponent', () => {
  let component: EMISummeryComponent;
  let fixture: ComponentFixture<EMISummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMISummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMISummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
