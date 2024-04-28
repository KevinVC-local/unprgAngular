import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService {

  public totalPrice = new BehaviorSubject<number>(0);
  public total = 0;

  constructor() { }

  chageTotal(amount: number) {
    this.totalPrice.next(amount);
  }



}
