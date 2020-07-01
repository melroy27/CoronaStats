import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharingdataService {

  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  updateData(text: any) {
    this.messageSource.next(text);
  }
}
