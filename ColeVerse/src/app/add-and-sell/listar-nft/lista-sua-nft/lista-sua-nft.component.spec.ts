import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuaNFTComponent } from './lista-sua-nft.component';

describe('ListaSuaNFTComponent', () => {
  let component: ListaSuaNFTComponent;
  let fixture: ComponentFixture<ListaSuaNFTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSuaNFTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSuaNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
