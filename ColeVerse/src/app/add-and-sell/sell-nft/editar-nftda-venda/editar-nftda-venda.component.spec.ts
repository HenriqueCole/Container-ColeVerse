import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNFTdaVendaComponent } from './editar-nftda-venda.component';

describe('EditarNFTdaVendaComponent', () => {
  let component: EditarNFTdaVendaComponent;
  let fixture: ComponentFixture<EditarNFTdaVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNFTdaVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNFTdaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
