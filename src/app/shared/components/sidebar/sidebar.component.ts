import { Component, Input } from '@angular/core';

import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() theme: 'light' | 'dark' = 'dark';

  constructor(public translateService: TranslateService) {}
}
