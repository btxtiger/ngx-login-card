import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-login-card-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-login-card-button.component.html',
  styleUrls: ['./ngx-login-card-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLoginCardButtonComponent {

}
