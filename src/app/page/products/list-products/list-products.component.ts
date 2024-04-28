import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { CardProductsComponent } from "../card-products/card-products.component";
import { ProductPriceService } from '../../services/product-price.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  standalone: true,
  imports: [CommonModule, CardProductsComponent]
})
export class ListProductsComponent {

  private selectProduct = inject(ProductPriceService);
  private totalAmount = 0;

  public listProducts: Product[] = [
    {
      name: 'JUEGO DE MESA HOCKEY',
      description: '¡Las últimas tendencias en decoración llegaron a Ripley.com! Todo lo que necesitas para darle un toque personal a cualquier espacio. Encuentra los adornos más originales para decorar todos los rincones de tu hogar u oficina. Compra lo mejor en decoración a solo un clic.',
      account: 0,
      img: 'https://home.ripley.com.pe/Attachment/WOP_5/2030195930385/2030195930385_2.jpg',
      price: 25
    },
    {
      name: 'JUEGO DRINKING RULETA 32X32X10 CM',
      description: `¡Disfruta del tiempo con tu familia y amigos y diviértanse a morir! Variados
      juegos de mesa es lo que en esta oportunidad Ripley.com tiene para ti, con el mejor acabado y
      toda la practicidad que necesitas, podrás llevar estos juegos siempre contigo y pasar un momento
      súper agradable con quienes más quieres.`,
      account: 0,
      img: 'https://home.ripley.com.pe/Attachment/WOP_5/2088169193021/2088169193021_2.jpg',
      price: 65
    },
    {
      name: 'JUEGO DRINKING DARDS 23X29X6CM',
      description: `¡Sólo para verdaderos valientes! Será mejor que vayas practicando tu puntería
      porque de este juego nadie sale vivo. Reúne a tu macha para pasar una noche de full diversión,
      los dardos serán los protagonistas de la noche.`,
      account: 0,
      img: 'https://home.ripley.com.pe/Attachment/WOP_5/2088169193014/2088169193014_2.jpg',
      price: 35
    },
    {
      name: 'JUEGO DRINKING TOWER 17X21X8CM',
      description: `¡Disfruta del tiempo con tu familia y amigos y diviértanse a morir! Variados
      juegos de mesa es lo que en esta oportunidad Ripley.com tiene para ti, con el mejor acabado y
      toda la practicidad que necesitas, podrás llevar estos juegos siempre contigo y pasar un momento
      súper agradable con quienes más quieres.`,
      account: 0,
      img: 'https://home.ripley.com.pe/Attachment/WOP_5/2088169193007/2088169193007_2.jpg',
      price: 55
    },
  ];

  handleEmit(item: Product) {
    this.totalAmount = this.totalAmount + item.price; this.selectProduct.chageTotal(this.totalAmount);
  }

}
