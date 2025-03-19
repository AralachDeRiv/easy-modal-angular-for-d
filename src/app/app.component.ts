import { Component } from '@angular/core';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { BoredModalComponent } from './components/bored-modal/bored-modal.component';
import { EasyModalWrapperComponent } from './components/easy-modal-wrapper/easy-modal-wrapper.component';
import { BoredModalTowComponent } from './components/bored-modal-tow/bored-modal-tow.component';

@Component({
  selector: 'app-root',
  imports: [
    ModalWrapperComponent,
    BoredModalComponent,
    EasyModalWrapperComponent,
    BoredModalTowComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easy-modal-angular-for-d';

  // MODALS
  openBoredModal = false;
  displayBoredModal() {
    this.openBoredModal = true;
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
}
