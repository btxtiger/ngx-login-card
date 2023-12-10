import { NgClass,NgForOf,NgIf,NgStyle } from '@angular/common';
import {
AfterViewInit,
ChangeDetectionStrategy,
Component,ElementRef,
EventEmitter,
HostBinding,
Input,
OnChanges,
OnInit,
Output,
SimpleChanges,ViewChild,
ViewEncapsulation,
} from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { NgxMdIconModule } from "ngx-md-icon";

class TextContent {
   public signInTitle: string = 'Login';
   public usernameOrEmailPlaceholder: string = 'Email';
   public passwordPlaceholder: string = 'Password';
   public loginButtonText: string = 'Sign In';
   public maintenanceMessage: string = '⚠️ Currently under Maintenance';
   public forgotPasswordText: string = 'Forgot Password?';
   public forgotPasswordHint: string = 'Enter the email address linked to your account.';
   public forgotPasswordHintPlaceholder: string = 'Email address';
   public forgotPasswordButtonText: string = 'Send recovery link';
   public forgotPasswordTitle: string = 'Password Recovery';
   public forgotPasswordError: string = 'Invalid email address';
}

@Component({
   selector: 'ngx-login-card',
   templateUrl: './ngx-lib.component.html',
   styleUrls: ['./ngx-lib.component.scss'],
   imports: [NgIf, NgClass, ReactiveFormsModule, NgForOf, NgStyle, MatRippleModule, NgxMdIconModule, FormsModule],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None,
   standalone: true,
})
export class NgxLibComponent implements OnInit, AfterViewInit, OnChanges {
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
   public isForgotPasswordActive: boolean = true;

   @Input()
   public config: any;

   @Output()
   public login = new EventEmitter<any>();

   @Output()
   public forgotPasswordEvent = new EventEmitter<string>();

   @ViewChild('sectionLogin', { static: true })
   public sectionLoginElem!: ElementRef;

   public loginForm!: FormGroup;
   public hasForgotPasswordError: boolean = false;
   public forgotPasswordEmailInput?: string;

   constructor(private fb: FormBuilder) {}

   ngOnInit(): void {
      this.loginForm = this.fb.group({
         usernameOrEmail: [''],
         password: [''],
      });
   }

   ngAfterViewInit(): void {
      const size = this.sectionLoginElem.nativeElement.offsetHeight;
      this.sectionLoginElem.nativeElement.style.height = `${size}px`;
      console.warn('size', size);
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

   /**
    * Submit the forgot password form
    */
   public submitResetPassword(): void {
      if (!this.forgotPasswordEmailInput?.match(/^\S+@\S+\.\S+$/)) {
         this.hasForgotPasswordError = true;
         return;
      }

      this.hasForgotPasswordError = false;
      this.forgotPasswordEvent.emit(this.forgotPasswordEmailInput);
   }
}
