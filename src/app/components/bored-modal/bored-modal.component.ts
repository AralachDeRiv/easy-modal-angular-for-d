import { Component, output } from '@angular/core';

@Component({
  selector: 'app-bored-modal',
  imports: [],
  templateUrl: './bored-modal.component.html',
  styleUrl: './bored-modal.component.css',
})
export class BoredModalComponent {
  closeBoredModal = output();
  onClose() {
    this.closeBoredModal.emit();
  }
  width = 300;
}
