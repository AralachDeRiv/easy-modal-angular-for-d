import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredModalComponent } from './bored-modal.component';

describe('BoredModalComponent', () => {
  let component: BoredModalComponent;
  let fixture: ComponentFixture<BoredModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoredModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
