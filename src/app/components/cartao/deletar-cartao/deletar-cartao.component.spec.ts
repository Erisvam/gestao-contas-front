import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarCartaoComponent } from './deletar-cartao.component';

describe('DeletarCartaoComponent', () => {
  let component: DeletarCartaoComponent;
  let fixture: ComponentFixture<DeletarCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletarCartaoComponent]
    });
    fixture = TestBed.createComponent(DeletarCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
