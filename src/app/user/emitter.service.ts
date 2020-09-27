import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmitterService {
 
  myevent = new EventEmitter();

  constructor() { }
}
