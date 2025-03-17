import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTerminatorComponent } from './modal-terminator.component';

describe('ModalTerminatorComponent', () => {
  let component: ModalTerminatorComponent;
  let fixture: ComponentFixture<ModalTerminatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTerminatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTerminatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
