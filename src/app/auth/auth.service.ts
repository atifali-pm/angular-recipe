import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZa6AxcTfDVofoiSv8JLP1Yo4L_uSnEBE', {
      email,
      password,
      returnSecureToken: true
    })
      .pipe(
        catchError(this.handleError),
        tap(responseData => {
          this.handleAuth(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
        })
      );
  }

  login(email: string, password: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZa6AxcTfDVofoiSv8JLP1Yo4L_uSnEBE', {
      email,
      password,
      returnSecureToken: true
    })
      .pipe(
        catchError(this.handleError),
        tap(responseData => {
          this.handleAuth(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
        })
      );
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email is already exist!';
        break;

      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Operation not allowed!';
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempts try later';
        break;

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found!';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password!';
        break;

      case 'USER_DISABLED':
        errorMessage = 'User disabled!';
        break;
    }

    return throwError(errorMessage);
  }
}
