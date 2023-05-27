import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-and-login',
  templateUrl: './signup-and-login.component.html',
  styleUrls: ['./signup-and-login.component.scss']
})
export class SignupAndLoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    // private authService: AuthService,
    // private toast: HotToastService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  doSomethings() {
    console.log('i am doing something');
  }

  isButtonClicked: boolean = false;

  openRightPanel() {
    this.isButtonClicked = !this.isButtonClicked;
    console.log(this.isButtonClicked);
  }
  openLeftPanel() {
    this.isButtonClicked = !this.isButtonClicked;
    console.log(this.isButtonClicked);
  }

  // submit() {
  //   const { email, password } = this.loginForm.value;

  //   if (!this.loginForm.valid || !email || !password) {
  //     return;
  //   }

  //   this.authService
  //     .login(email, password)
  //     .pipe(
  //       this.toast.observe({
  //         success: 'Logged in successfully',
  //         loading: 'Logging in...',
  //         error: ({ message }) => `There was an error: ${message} `,
  //       })
  //     )
  //     .subscribe(() => {
  //       this.router.navigate(['/home']);
  //     });
  // }
}