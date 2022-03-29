import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public token$: Observable<number> = this.token.asObservable();
  constructor() { }

  public setToken(token: number): void{
    this.token.next(token);
  }
}
