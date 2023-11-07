import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import {
   ChangeDetectionStrategy,
   Component,
   EventEmitter,
   HostBinding,
   Input,
   OnChanges,
   OnInit,
   Output,
   SimpleChanges,
   ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

class TextContent {
   public signInTitle: string = 'Login';
   public usernameOrEmailPlaceholder: string = 'Email';
   public passwordPlaceholder: string = 'Password';
   public loginButtonText: string = 'Sign In';
   public forgotPasswordText: string = 'Forgot Password?';
   public maintenanceMessage: string = '⚠️ Currently under Maintenance';
}

@Component({
   selector: 'ngx-login-card',
   templateUrl: './ngx-lib.component.html',
   styleUrls: ['./ngx-lib.component.scss'],
   imports: [NgIf, NgClass, ReactiveFormsModule, NgForOf, NgStyle],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None,
   standalone: true,
})
export class NgxLibComponent implements OnInit, OnChanges {
   @HostBinding()
   public class: string = 'ngx-login-card';

   @Input()
   public textContent: TextContent = new TextContent();

   @Input()
   public isMaintenance?: boolean;

   @Input()
   public avatarUrl?: string;

   @Input()
   public imageUrl?: string;

   @Input()
   public imagePosition: 'left' | 'right' = 'right';

   @Input()
   public oauthProviders?: string[];

   @Input()
   public showForgotPassword?: boolean | '';

   @Input()
   public config: any;

   @Output()
   public login = new EventEmitter<any>();

   @Output()
   public forgotPasswordClick = new EventEmitter<void>();

   public loginForm!: FormGroup;

   constructor(private fb: FormBuilder) {}

   ngOnInit(): void {
      this.loginForm = this.fb.group({
         usernameOrEmail: [''],
         password: [''],
      });
   }

   ngOnChanges(changes: SimpleChanges): void {
      // Handle changes to input properties
      console.warn('changes', changes);
   }

   /** == Undocumented Function == */
   public onSubmit(): void {
      if (this.loginForm.valid) {
         this.login.emit(this.loginForm.value);
      }
   }

   /** == Undocumented Function == */
   public onForgotPasswordClick(): void {
      this.forgotPasswordClick.emit();
   }
}
