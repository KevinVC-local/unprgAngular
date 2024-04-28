import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss'],
  standalone: true,
  imports: []
})
export class CardProductsComponent implements OnInit {


  @Input() cardData!: Product;
  @Output() emitData = new EventEmitter();


  ngOnInit(): void {
  }

  handleEmit() {
    this.emitData.emit(this.cardData);
  }
}
