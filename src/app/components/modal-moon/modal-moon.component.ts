import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-moon',
  imports: [],
  templateUrl: './modal-moon.component.html',
})
export class ModalMoonComponent {
  @ViewChild('modalMoon') modalMoon!: ElementRef;

  displayModal() {
    this.modalMoon.nativeElement.showModal();
  }

  closeOnTheBackdrop(event: MouseEvent) {
    const dialogElement = this.modalMoon.nativeElement;
    const rect = dialogElement.getBoundingClientRect();

    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      this.closeModale();
    }
  }

  closeModale() {
    this.modalMoon.nativeElement.close();
  }
}
