import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    console.log('Inicializando componente ProductsComponent');
    this.productsService.getProducts().subscribe({
      next: (products) => {
        console.log('Productos recibidos:', products);
        this.products = products;
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
      }
    });
  }
}
