import { Component, output } from '@angular/core';

@Component({
  selector: 'app-bored-modal-tow',
  imports: [],
  templateUrl: './bored-modal-tow.component.html',
})
export class BoredModalTowComponent {
  closeModal = output();
  onClose() {
    this.closeModal.emit();
  }
}
