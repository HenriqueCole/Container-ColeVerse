import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverNFTComponent } from './remover-nft.component';

describe('RemoverNFTComponent', () => {
  let component: RemoverNFTComponent;
  let fixture: ComponentFixture<RemoverNFTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverNFTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
