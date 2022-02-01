import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAddAndSellComponent } from './tela-add-and-sell.component';

describe('TelaAddAndSellComponent', () => {
  let component: TelaAddAndSellComponent;
  let fixture: ComponentFixture<TelaAddAndSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAddAndSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaAddAndSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
