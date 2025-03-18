import { Component, output } from '@angular/core';

@Component({
  selector: 'app-easy-modal-wrapper',
  imports: [],
  templateUrl: './easy-modal-wrapper.component.html',
  styleUrl: './easy-modal-wrapper.component.css',
})
export class EasyModalWrapperComponent {
  closeModal = output();
  onClose() {
    this.closeModal.emit();
  }
}
