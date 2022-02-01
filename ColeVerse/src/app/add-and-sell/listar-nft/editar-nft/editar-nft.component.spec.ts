import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNFTComponent } from './editar-nft.component';

describe('EditarNFTComponent', () => {
  let component: EditarNFTComponent;
  let fixture: ComponentFixture<EditarNFTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNFTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
