import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var auth0: any;
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  
  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: 'ganhari123.auth0.com',
    clientID: 's92JIiIAY7GcNBXCRsDOHHqWF175WYg1',
    // specify your desired callback URL
    callbackURL: 'http://localhost:3000/home',
    responseType: 'token id_token'
  });

  lock = new Auth0Lock('s92JIiIAY7GcNBXCRsDOHHqWF175WYg1', 'ganhari123.auth0.com', {
    auth: {
        callbackURL: 'http://localhost:3000/home',
        redirectUrl: 'http://localhost:3000/home',
        responseType: 'token',
        // sso: true,
        redirect: false,
        params: {
            scope: 'openid user_id name nickname email picture'
        }
    }

  });

  userProfile: Object;

  constructor(private router: Router) {
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigate(['/home']);
      } else if (authResult && authResult.error) {
        alert('Error: ' + authResult.error);
      }
    });
  }

  public login(username: string, password: string): void {
    this.auth0.client.login({
      realm: 'maindb',
      username,
      password
    }, (err, authResult) => {
      if (err) {
        alert('Error: ' + err.description);
        return;
      }
      if (authResult && authResult.idToken && authResult.accessToken) {
        this.setUser(authResult);
        this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
          // Now you have the user's information
          console.log(user);
          this.userProfile = user;
          this.router.navigate(['/home']);
        });

        
      }
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the id_token is expired or not
    return tokenNotExpired();
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigate(['/login']);
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    
  }
}