import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-login-card-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-login-card-input.component.html',
  styleUrls: ['./ngx-login-card-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLoginCardInputComponent {

}
