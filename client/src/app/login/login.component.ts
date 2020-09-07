import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { StorageService } from "../services/storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import {SnackbarService} from "../services/snackbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private snackbar: SnackbarService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.storage.getJwt()) this.router.navigate(['/']);
    this.canLoginSnack();
  }

  canLoginSnack() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.signedUp) this.snackbar.open('Now you can login');
    })
  }

  login() {
    this.auth.login(this.form.value).subscribe(
      response => {
        this.storage.setAuthData({userId: response.user._id, jwt: response.accessToken, refresh: response.refreshToken});
        this.router.navigate(['/']);
      },
      error => {
        console.log(error)
        if (error.error.error && error.error.error === 'User not found')
          this.snackbar.open('User not found');
        else if (error.error.error && error.error.error === 'Password not correct')
          this.snackbar.open('Password incorrect');
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }

}
