import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverNFTdaVendaComponent } from './remover-nftda-venda.component';

describe('RemoverNFTdaVendaComponent', () => {
  let component: RemoverNFTdaVendaComponent;
  let fixture: ComponentFixture<RemoverNFTdaVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoverNFTdaVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverNFTdaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
