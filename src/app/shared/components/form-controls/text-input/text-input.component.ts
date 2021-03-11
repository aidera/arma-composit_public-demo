import { Component, Input, OnInit } from '@angular/core';

import { AbstractFormControlComponent } from '../abstract-form-control.component';
import { Icons } from '../../../constants/icons';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent
  extends AbstractFormControlComponent
  implements OnInit {
  @Input() icon?: Icons;
  @Input() fieldType?: 'text' | 'email' | 'password' = 'text';

  icons = Icons;
  type: string | undefined;

  ngOnInit(): void {
    this.type = this.fieldType;
  }

  public changePasswordFieldType(): void {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
