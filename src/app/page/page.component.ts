import { Component, inject, OnInit } from '@angular/core';
import { ProductPriceService } from './services/product-price.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public total = 0;
  public productServices = inject(ProductPriceService);

  ngOnInit(): void {
    this.productServices.totalPrice.subscribe((value) => {
      this.total = value;
    })
  }

}
