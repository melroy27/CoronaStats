import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharingdataService {

  private messageSource = new BehaviorSubject<string>('Default');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  updateData(text: string) {
    this.messageSource.next(text);
  }
}
