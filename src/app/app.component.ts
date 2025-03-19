import { Component, ViewChild } from '@angular/core';
import { BoredModalTowComponent } from './components/bored-modal-tow/bored-modal-tow.component';
import { BoredModalComponent } from './components/bored-modal/bored-modal.component';
import { EasyModalWrapperComponent } from './components/easy-modal-wrapper/easy-modal-wrapper.component';
import { ModalMoonComponent } from './components/modal-moon/modal-moon.component';
import { ModalTerminatorComponent } from './components/modal-terminator/modal-terminator.component';

@Component({
  selector: 'app-root',
  imports: [
    BoredModalComponent,
    EasyModalWrapperComponent,
    BoredModalTowComponent,
    ModalMoonComponent,
    ModalTerminatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easy-modal-angular-for-d';

  // MODALS

  // EASY MODALS
  openBoredModal = false;
  displayBoredModal() {
    this.openBoredModal = true;
    // Pour retirer le scroll
    document.body.style.overflow = 'hidden';
  }
  closeBoredModal() {
    this.openBoredModal = false;
    document.body.style.overflow = '';
  }

  openBoredModalTwo = false;
  displayBoredModalTwo() {
    this.openBoredModalTwo = true;
    document.body.style.overflow = 'hidden';
  }
  closeBoredModalTwo() {
    this.openBoredModalTwo = false;
    document.body.style.overflow = '';
  }

  // EXPERIMENTALES
  @ViewChild(ModalMoonComponent) modalMoonComponent!: ModalMoonComponent;
  displayModalMoon() {
    this.modalMoonComponent.displayModal();
  }

  @ViewChild(ModalTerminatorComponent)
  modalTerminatorComponent!: ModalTerminatorComponent;
  displayModalTerminator() {
    this.modalTerminatorComponent.displayModal();
  }
}
