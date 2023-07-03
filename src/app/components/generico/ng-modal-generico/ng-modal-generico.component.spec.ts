import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModalGenericoComponent } from './ng-modal-generico.component';

describe('NgModalGenericoComponent', () => {
  let component: NgModalGenericoComponent;
  let fixture: ComponentFixture<NgModalGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgModalGenericoComponent]
    });
    fixture = TestBed.createComponent(NgModalGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
