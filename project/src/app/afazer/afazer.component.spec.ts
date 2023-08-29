import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfazerComponent } from './afazer.component';

describe('AfazerComponent', () => {
  let component: AfazerComponent;
  let fixture: ComponentFixture<AfazerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfazerComponent]
    });
    fixture = TestBed.createComponent(AfazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
