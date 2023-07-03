import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCartaoComponent } from './detalhe-cartao.component';

describe('DetalheCartaoComponent', () => {
  let component: DetalheCartaoComponent;
  let fixture: ComponentFixture<DetalheCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheCartaoComponent]
    });
    fixture = TestBed.createComponent(DetalheCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
