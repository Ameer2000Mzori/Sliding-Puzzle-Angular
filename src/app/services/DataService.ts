import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private stateSubject = new BehaviorSubject<any>({});
  state$: Observable<any> = this.stateSubject.asObservable();

  constructor() {
    // Retrieve state from local storage on initialization
    const storedState = localStorage.getItem('state');
    this.stateSubject.next(storedState ? JSON.parse(storedState) : {});
  }

  updateState(newState: any) {
    this.stateSubject.next(newState);
    // Save to local storage
    localStorage.setItem('state', JSON.stringify(newState));
  }
}
