import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { USER_LOGIN } from '../models/data.storage';
import { N1000 } from 'src/app/shared/providers/variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule]
})
export class LoginComponent implements OnInit {


  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  public test = true;
  public form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  handleNavigate() {
    this.router.navigateByUrl('/login/register');
  }

  navigate() {
    this.authService.loginUser().subscribe({
      next: (value) => {
        if (value.name) {
          this.authService.set(USER_LOGIN, value);
          this.router.navigateByUrl('/');
        }
      },
      error: (err) => {
        alert(err);
      },
    })
  }

}
