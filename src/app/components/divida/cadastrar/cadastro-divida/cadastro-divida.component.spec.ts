import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDividaComponent } from './cadastro-divida.component';

describe('CadastroDividaComponent', () => {
  let component: CadastroDividaComponent;
  let fixture: ComponentFixture<CadastroDividaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroDividaComponent]
    });
    fixture = TestBed.createComponent(CadastroDividaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
