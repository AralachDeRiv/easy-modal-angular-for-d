import { Component, output } from '@angular/core';

@Component({
  selector: 'app-modal-wrapper',
  imports: [],
  templateUrl: './modal-wrapper.component.html',
  styleUrl: './modal-wrapper.component.css',
})
export class ModalWrapperComponent {
  closeModal = output();

  onClose() {
    this.closeModal.emit();
  }
}
