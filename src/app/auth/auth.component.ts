import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoadingMode = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoadingMode = true;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);

    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs
      .subscribe(
        resData => {
          console.log(resData);
          this.isLoadingMode = false;
          this.router.navigate(['/recipes']);
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoadingMode = false;
        }
      );

    form.reset();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
