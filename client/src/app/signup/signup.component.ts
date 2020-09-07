import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";
import {SnackbarService} from "../services/snackbar.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
  }, {validator: this.passwordMatchValidator});

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackbar: SnackbarService,
    private storage: StorageService
  ) { }

  passwordMatchValidator(form: FormGroup) {
    return form.controls['password'].value === form.controls['passwordConfirm'].value ? null : {'mismatch': true};
  }

  ngOnInit() {
    if (this.storage.getJwt()) this.router.navigate(['/']);
  }

  signup() {
    this.auth.signup(this.form.value).subscribe(
      response => {
        this.form.reset();
        this.router.navigate(['login'], {queryParams: {signedUp: true}});
      },
      error => {
        if (error.error.error && error.error.error.slice(0, 37) === 'E11000 duplicate key error collection')
          this.snackbar.open('User already exists. Forgot password?', 'Yes', 5000);
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }


}
