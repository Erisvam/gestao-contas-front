import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemSucessoComponent } from './mensagem-sucesso.component';

describe('MensagemSucessoComponent', () => {
  let component: MensagemSucessoComponent;
  let fixture: ComponentFixture<MensagemSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensagemSucessoComponent]
    });
    fixture = TestBed.createComponent(MensagemSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
