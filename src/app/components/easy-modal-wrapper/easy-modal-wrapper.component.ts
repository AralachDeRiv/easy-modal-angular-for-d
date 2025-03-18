import { Component, output } from '@angular/core';

@Component({
  selector: 'app-easy-modal-wrapper',
  imports: [],
  templateUrl: './easy-modal-wrapper.component.html',
})
export class EasyModalWrapperComponent {
  closeModal = output();
  onClose() {
    this.closeModal.emit();
  }
}
