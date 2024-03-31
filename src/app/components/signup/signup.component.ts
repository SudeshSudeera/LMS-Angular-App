import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { cookieService } from '../../services/cookie/cookie.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatInput,
    MatFormFieldModule,
    MatButton,
    MatLabel,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private auth: AuthService, 
    private router: Router, 
    private cookieService:cookieService) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  })

  create() {
    this.auth.register(
      this.form.value.email!,
      this.form.value.password!,
      this.form.value.firstName!,
      this.form.value.lastName!
    ).subscribe(response => {
      this.router.navigateByUrl('/login');
    })
  }
  
}
