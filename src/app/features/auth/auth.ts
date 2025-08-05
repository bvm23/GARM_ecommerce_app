import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthFormControls } from './auth.model';
import { Auth as AuthService } from '../../services/auth';
import { NgClass } from '@angular/common';

@Component({
  selector: 'e-auth',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  private authService = inject(AuthService);

  authForm = new FormGroup<AuthFormControls>({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  onSubmit() {
    const loginEmail = this.authForm.controls.email;
    const loginPassword = this.authForm.controls.password;
    if (loginEmail.invalid || loginPassword.invalid) return;

    this.authService.login(loginEmail.value!, loginPassword.value!).subscribe();
  }

  isInvalidControl(controlName: keyof AuthFormControls) {
    const control = this.authForm.controls[controlName];
    return control.invalid && control.touched && control.dirty;
  }
}
