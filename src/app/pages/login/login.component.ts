import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['dashboard']);
        },
        error: (err) => {
          alert('Invalid username or password');
          this.loginForm.get('username').setErrors({invalid: true});
          this.loginForm.get('password').setErrors({invalid: true});
        }

      });
    } else {
      alert('Please fill in the form');
      this.loginForm.markAllAsTouched();
    }
  }
}
