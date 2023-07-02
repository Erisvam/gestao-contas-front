import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCartaoComponent } from './delete-cartao.component';

describe('DeleteCartaoComponent', () => {
  let component: DeleteCartaoComponent;
  let fixture: ComponentFixture<DeleteCartaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCartaoComponent]
    });
    fixture = TestBed.createComponent(DeleteCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
