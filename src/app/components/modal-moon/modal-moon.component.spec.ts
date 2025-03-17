import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMoonComponent } from './modal-moon.component';

describe('ModalMoonComponent', () => {
  let component: ModalMoonComponent;
  let fixture: ComponentFixture<ModalMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
