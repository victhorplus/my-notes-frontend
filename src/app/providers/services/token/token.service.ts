import { Injectable } from '@angular/core';
import { RefreshToken } from '../../../classes';
import { Cookie } from '../../helpers/cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: Cookie) { }

  storeRefreshToken(refreshToken: RefreshToken): void {
    this.cookieService.create('refreshToken', refreshToken.id, {
      expires: refreshToken.expiresIn,
      httpOnly: true,
      secure: true
    });
  }

  storeAccessToken(accessToken: string): void {
    localStorage.setItem('user', JSON.stringify({
      accessToken
    }))
  }
}
