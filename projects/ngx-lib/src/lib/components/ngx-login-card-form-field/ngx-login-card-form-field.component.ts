import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-login-card-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-login-card-form-field.component.html',
  styleUrls: ['./ngx-login-card-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLoginCardFormFieldComponent {

}
