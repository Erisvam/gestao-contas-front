import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharCartaoComponent } from './detalhar-cartao.component';

describe('DetalharCartaoComponent', () => {
  let component: DetalharCartaoComponent;
  let fixture: ComponentFixture<DetalharCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalharCartaoComponent]
    });
    fixture = TestBed.createComponent(DetalharCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
