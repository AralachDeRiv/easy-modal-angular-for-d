import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-terminator',
  imports: [],
  templateUrl: './modal-terminator.component.html',
})
export class ModalTerminatorComponent {
  @ViewChild('modalTerminator') modalTerminator!: ElementRef;

  displayModal() {
    this.modalTerminator.nativeElement.showModal();
    document.body.style.overflow = 'hidden';
  }

  closeOnTheBackdrop(event: MouseEvent) {
    const dialogElement = this.modalTerminator.nativeElement;
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
    this.modalTerminator.nativeElement.close();
    document.body.style.overflow = '';
  }
}
