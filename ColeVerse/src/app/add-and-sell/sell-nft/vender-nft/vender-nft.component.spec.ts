import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderNFTComponent } from './vender-nft.component';

describe('VenderNFTComponent', () => {
  let component: VenderNFTComponent;
  let fixture: ComponentFixture<VenderNFTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderNFTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
