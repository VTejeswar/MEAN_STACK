import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  bs=new BehaviorSubject(0);
  current_value:any
  constructor() { 
    this.current_value=this.bs.asObservable()
  }
  funnext(value){
   
    this.bs.next(value)
  }
}
