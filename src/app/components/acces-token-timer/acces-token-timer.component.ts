import { Component } from '@angular/core';
import { TokenService } from '../../providers/services';
import { CommonModule } from '@angular/common';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-acces-token-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acces-token-timer.component.html',
  styleUrl: './acces-token-timer.component.scss'
})
export class AccesTokenTimerComponent {
  token: string;
  jwt: {
    header: Object;
    payload: {
      iat: number;
      exp: number;
      sub: string;
    };
  };
  timer$: Observable<{
    minutes: string;
    seconds: string;
  }>
  
  constructor(private tokenService: TokenService){
    this.timer$ = this.getTimer();
  }

  getTimer(): Observable<{
    minutes: string;
    seconds: string;
  }> {
    return interval(500).pipe(
      map(() => {
        const timeToExpire = new Date(this.getExpiration()*1000).getTime() - new Date().getTime();
        const seconds = Math.floor(timeToExpire / 1000);
        const minutes = Math.floor(seconds / 3600 );

        if(seconds <= 0 && minutes <= 0 ) {
          return {
            minutes: '00',
            seconds: '00'
          }
        }

        return {
          seconds: seconds < 10 ? `0${seconds}` : ''+seconds,
          minutes: minutes < 10 ? `0${minutes}` : '' + minutes,
        }
      })
    )
  }

  getExpiration(): number {
    if(!this.tokenService.getAccessToken()) return 0;
    
    this.token = this.tokenService.getAccessToken() as string;
    let [ header, payload ] = this.token?.split('.');
    return JSON.parse(atob(payload))?.exp;
  }

}
