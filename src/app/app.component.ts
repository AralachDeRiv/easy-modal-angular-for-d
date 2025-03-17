import { Component } from '@angular/core';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { BoredModalComponent } from './components/bored-modal/bored-modal.component';

@Component({
  selector: 'app-root',
  imports: [ModalWrapperComponent, BoredModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easy-modal-angular-for-d';

  openBoredModal = false;
  displayBoredModal() {
    this.openBoredModal = true;
  }
  closeBoredModal() {
    this.openBoredModal = false;
  }
}
