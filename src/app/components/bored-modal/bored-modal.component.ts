import { Component, output } from '@angular/core';

@Component({
  selector: 'app-bored-modal',
  imports: [],
  templateUrl: './bored-modal.component.html',
})
export class BoredModalComponent {
  closeBoredModal = output();
  onClose() {
    this.closeBoredModal.emit();
  }
}
