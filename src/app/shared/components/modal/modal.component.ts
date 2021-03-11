import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('all', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('250ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ModalComponent {
  @Input() title = 'Default title';
  @Input() isOpen: boolean;
  @Output() closeModal = new EventEmitter<void>();

  onClose(): void {
    this.closeModal.emit();
  }
}
