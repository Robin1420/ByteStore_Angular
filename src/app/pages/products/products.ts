import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CurrencyPipe],
  templateUrl: './products.html',
  providers: [ProductsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Products implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('Inicializando componente ProductsComponent');
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        // Forzar la detección de cambios
        this.cdr.detectChanges();
      },
    });
  }
}
